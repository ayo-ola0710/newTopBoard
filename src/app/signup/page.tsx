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
import { Eye, EyeOff } from "lucide-react";

interface SignupProps {
  fullName: string;
  email: string;
  password: string;
  userType: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  userType?: string;
}

const SignupPage = () => {
  const [formData, setFormData] = useState<SignupProps>({
    fullName: "",
    email: "",
    password: "",
    userType: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain '@'";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (!formData.userType.trim()) {
      newErrors.userType = "Please select whether you are a tutor or student";
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
          <p className="text-[#8E91A1] mt-1">Create your own account.</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-lg w-full ml-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col  mt-4 pl-12 pr-12"
          >
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="fullname">Full Name</FieldLabel>
                <Input
                  id="fullname"
                  name="fullName"
                  placeholder="Enter your full name"
                  className="bg-[#F8F8F8] py-5 rounded-3xl"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                {errors.fullName && <FieldError>{errors.fullName}</FieldError>}
              </Field>

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

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="bg-[#F8F8F8] py-5 rounded-3xl pr-12"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && <FieldError>{errors.password}</FieldError>}
              </Field>

              <Field>
                <FieldLabel>I am a:</FieldLabel>
                <div className="flex space-x-3 w-full mt-2 mb-6">
                  <label className="flex items-center justify-between flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer text-gray-500">
                    <span>Tutor</span>
                    <input
                      type="radio"
                      name="userType"
                      value="Tutor"
                      checked={formData.userType === "Tutor"}
                      onChange={handleInputChange}
                      className="ml-2"
                    />
                  </label>
                  <label className="flex items-center justify-between flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer text-gray-500">
                    <span>Student</span>
                    <input
                      type="radio"
                      name="userType"
                      value="Student"
                      checked={formData.userType === "Student"}
                      onChange={handleInputChange}
                      className="ml-2"
                    />
                  </label>
                </div>
                {errors.userType && <FieldError>{errors.userType}</FieldError>}
              </Field>
            </FieldGroup>

            <div>
              <Button
                type="submit"
                className="w-full px-10 py-6 border-2 border-gray-300 rounded-full bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white transition"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </div>

            <div>
              <p className="text-sm text-gray-500 text-center mt-3">
                Already have an account?{" "}
                <a
                  href="/signin"
                  className="text-blue-400 underline hover:text-blue-600 transition-colors"
                >
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
