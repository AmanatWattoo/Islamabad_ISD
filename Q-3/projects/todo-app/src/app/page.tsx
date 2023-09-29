'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiEditAlt } from 'react-icons/bi';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Select from './component/Select';

interface Task {
  text: string;
  date: string;
  status: 'completed' | 'pending';
}

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [editingTaskIndex, setEditingTaskIndex] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState<string>('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      const currentDate = new Date().toLocaleString();
      const newTaskItem: Task = {
        text: newTask,
        date: currentDate,
        status: 'pending',
      };
      setTasks([...tasks, newTaskItem]);
      setNewTask('');
    }
  };

  const editTask = (index: number) => {
    setEditingTaskIndex(index);
    setEditedTask(tasks[index].text);
  };

  const saveEdit = () => {
    if (editedTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editingTaskIndex!] = {
        ...updatedTasks[editingTaskIndex!],
        text: editedTask,
      };
      setTasks(updatedTasks);
      setEditingTaskIndex(null);
      setEditedTask('');
    }
  };

  const cancelEdit = () => {
    setEditingTaskIndex(null);
    setEditedTask('');
  };

  const deleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  useEffect(() => {
    const removeCompletedTasks = () => {
      const updatedTasks = tasks.filter((task) => task.status === 'pending');
      setTasks(updatedTasks);
    };

    const interval = setInterval(() => {
      removeCompletedTasks();
    }, 60000);

    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <div className='bg-gray-100 min-h-screen flex items-center flex-col justify-center'>
      <Label className='text-4xl mb-4'>Awesome Todo App</Label>
      <div className='w-[25rem] p-8 bg-white rounded shadow-md'>
        <div className='mb-4'>
          {tasks.map((task, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex justify-between items-center ${
                editingTaskIndex === index ? 'bg-yellow-100' : 'bg-gray-100'
              } p-2 rounded-lg mb-2`}
            >
              <div className='flex-grow'>
                {editingTaskIndex === index ? (
                  <Input
                    className='w-full rounded-md focus:outline-none'
                    type='text'
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                  />
                ) : (
                  <p className='py-2'>{task.text}</p>
                )}
              </div>
              <div className='flex space-x-2'>
                {editingTaskIndex === index ? (
                  <>
                    <Button
                      className='bg-green-500 hover:bg-green-600'
                      onClick={saveEdit}
                    >
                      Save
                    </Button>
                    <Button
                      className='bg-gray-400 hover:bg-gray-500'
                      onClick={cancelEdit}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className='bg-blue-500 hover.bg-blue-600'
                      onClick={() => editTask(index)}
                    >
                      <BiEditAlt />
                    </Button>
                    <Button
                      className='bg-red-500 hover:bg-red-600'
                      onClick={() => deleteTask(index)}
                    >
                      <RiDeleteBin6Line />
                    </Button>
                  </>
                )}
                <Select
                  value={task.status}
                  onChange={(e) => {
                    const updatedTasks = [...tasks];
                    updatedTasks[index].status = e.target.value as 'completed' | 'pending';
                    setTasks(updatedTasks);
                  }}
                >
                  <option value='completed'>Completed</option>
                  <option value='pending'>Pending</option>
                </Select>
              </div>
            </motion.div>
          ))}
        </div>
        <div className='flex flex-col'>
          <Input
            className='w-full rounded-md mr-2 focus:outline-none'
            type='text'
            placeholder='Enter Task Here'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button
            className='bg-blue-500 mt-4 hover:bg-blue-600'
            onClick={addTask}
          >
            Add Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
