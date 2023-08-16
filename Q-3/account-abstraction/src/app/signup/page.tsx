import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <div>
      <div>
        <h1>Welcome to JWT Authenctication</h1>
        <p>Signup</p>
      </div>
      <div>
        <Label>Username:</Label>
        <Input type="text" placeholder="Enter here your name" />
        <Label>Email:</Label>
        <Input type="email" placeholder="Enter here your email" />
        <Label>Password:</Label>
        <Input
          type="Password"
          placeholder="Enter here your password"
          maxLength={8}
        />
        <Label> Re_Type Password:</Label>
        <Input
          type="Password"
          placeholder="Again write pasword"
          maxLength={8}
        />
        <div>
          <Link href={""}>
            <Button>Signup</Button>
          </Link>
        </div>
      </div>
      <div>
        <p>
          If already have an account{" "}
          <Link className="text-blue-900 underline" href={"/signin"}>
            {" "}
            click here{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
