"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { ArrowLeft } from "lucide-react";

interface SignupProps {
  email: string;
}

interface FormErrors {
  email?: string;
}

const ForgetPasswordPage = () => {
  const [formData, setFormData] = useState<SignupProps>({
    email: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain '@'";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    // Add form submission logic here
    console.log("Form data:", formData);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        {/* Logo and Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-16 h-12 rounded-lg mb-4">
            <img src="/icons/logo.png" alt="Logo" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            <span className="text-blue-500">Top</span>
            Board
          </h1>
          <p className="text-[#8E91A1] mt-1">
            Welcome back! Please enter your email to continue
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-lg w-full ml-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col  space-y-10 mt-4 pl-12 pr-12"
          >
            <div className="text-center">
              <p className="font-semibold text-xl mb-3">
                Forgot your password?
              </p>
              <p className="text-[11px]">
                Enter your email and we&apos;ll send you a link to reset <br />{" "}
                your password.
              </p>
            </div>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#F8F8F8] py-5 rounded-3xl"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <FieldError>{errors.email}</FieldError>}
              </Field>
            </FieldGroup>

            <div className="space-y-3">
              <Button
                type="submit"
                className="w-full px-10 py-6 border-2 rounded-full bg-[#1E1F27] text-white font-medium hover:bg-blue-500 hover:text-white transition"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
              </Button>
              <Button
                type="button"
                className="w-full px-10 py-6 border-2 rounded-full bg-white text-black font-medium hover:bg-blue-500 hover:text-white transition flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                <ArrowLeft size={16} />
                Back to login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
