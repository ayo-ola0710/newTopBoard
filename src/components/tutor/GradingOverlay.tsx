import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

const gradingOverlay = ({ onClose, isOpen }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* dark overlay */}
          <motion.div
            className="absolute inset-0 bg-black/10 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* modal content */}
          <motion.article
            className="relative bg-white p-6 rounded-2xl shadow-xl z-10 w-2xl"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex justify-between items-center mb-10">
              <span className="flex justify-center items-center gap-2">
                <p className="text-xs text-[#848797]">Grading</p>
                <hr className="w-1 h-5 text-[#F4F4F4] border rounded-xl" />
                <p className="text-sm text-[#666979]">Ero sensei</p>
              </span>

              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                onClick={onClose}
              >
                ✕
              </button>
            </div>

            <span className="text-left flex flex-col gap-2 mb-10">
              <h2 className="text-[#8E91A1] text-sm">Submission Links</h2>
              <span className="text-left w-full space-x-2">
                <button className="cursor-pointer text-[#666979] text-xs uppercase w-72 h-8 bg-[#F4F4F4] border-b rounded-b-3xl text-center">
                  <span className="flex gap-2 justify-center items-center">
                    <FaGithub /> <p>Github</p>
                  </span>
                </button>
                <button className="cursor-pointer text-[#666979] text-xs uppercase w-72 h-8 bg-[#F4F4F4] border-b rounded-b-3xl text-center">
                  <span className="flex gap-2 justify-center items-center">
                    <BsCameraVideo />
                    <p>Live Demo</p>
                  </span>
                </button>
              </span>
            </span>

            <article className="mb-10">
              <h2 className="text-[#8E91A1] text-sm text-left">
                Score Breakdown
              </h2>
              <span className="text-left">
                <ul>
                  <li className="h-12 border-b border-[#F4F4F4] py-3 px-6">
                    <span className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <p className="text-[#848797] uppercase text-xs">
                          20 points
                        </p>
                        <hr className="w-1 h-5 bg-[#F4F4F4] border rounded-xl" />
                        <p className="text-[#666979] text-sm">User Interface</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="number"
                          className="bg-[#F4F4F4] w-9 h-7 rounded-md text-black py-1 px-1 text-center"
                          placeholder="-"
                          min={0}
                          max={20}
                        />
                        <p className="text-[#666979] text-sm">/20</p>
                      </div>
                    </span>
                  </li>
                  <li className="h-12 border-b border-[#F4F4F4] py-3 px-6">
                    <span className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <p className="text-[#848797] uppercase text-xs">
                          20 points
                        </p>
                        <hr className="w-1 h-5 bg-[#F4F4F4] border rounded-xl" />
                        <p className="text-[#666979] text-sm">User Interface</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="number"
                          className="bg-[#F4F4F4] w-9 h-7 rounded-md text-black py-1 px-1 text-center"
                          placeholder="-"
                          min={0}
                          max={20}
                        />
                        <p className="text-[#666979] text-sm">/20</p>
                      </div>
                    </span>
                  </li>
                  <li className="h-12 border-b border-[#F4F4F4] py-3 px-6">
                    <span className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <p className="text-[#848797] uppercase text-xs">
                          20 points
                        </p>
                        <hr className="w-1 h-5 bg-[#F4F4F4] border rounded-xl" />
                        <p className="text-[#666979] text-sm">User Interface</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="number"
                          className="bg-[#F4F4F4] w-9 h-7 rounded-md text-black py-1 px-1 text-center"
                          placeholder="-"
                          min={0}
                          max={20}
                        />
                        <p className="text-[#666979] text-sm">/20</p>
                      </div>
                    </span>
                  </li>
                  <li className="h-12 border-b border-[#F4F4F4] py-3 px-6">
                    <span className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <p className="text-[#848797] uppercase text-xs">
                          20 points
                        </p>
                        <hr className="w-1 h-5 bg-[#F4F4F4] border rounded-xl" />
                        <p className="text-[#666979] text-sm">User Interface</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="number"
                          className="bg-[#F4F4F4] w-9 h-7 rounded-md text-black py-1 px-1 text-center"
                          placeholder="-"
                          min={0}
                          max={20}
                        />
                        <p className="text-[#666979] text-sm">/20</p>
                      </div>
                    </span>
                  </li>
                  <li className="h-12 border-b border-[#F4F4F4] py-3 px-6">
                    <span className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <p className="text-[#848797] uppercase text-xs">
                          20 points
                        </p>
                        <hr className="w-1 h-5 bg-[#F4F4F4] border rounded-xl" />
                        <p className="text-[#666979] text-sm">User Interface</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="number"
                          className="bg-[#F4F4F4] w-9 h-7 rounded-md text-black py-1 px-1 text-center"
                          placeholder="-"
                          min={0}
                          max={20}
                        />
                        <p className="text-[#666979] text-sm">/20</p>
                      </div>
                    </span>
                  </li>
                  <li className="h-12 border-b border-[#F4F4F4] py-3 px-6">
                    <span className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <p className="text-[#848797] uppercase text-xs">
                          100 points
                        </p>
                        <hr className="w-1 h-5 bg-[#F4F4F4] border rounded-xl" />
                        <p className="text-[#666979] text-sm">Total Score</p>
                      </div>
                      <div className="flex items-center">
                        <p className="bg-[#F4F4F4] w-12 h-7 rounded-md text-black py-1 px-1 text-center" />
                        <p className="text-[#666979] text-sm">/100</p>
                      </div>
                    </span>
                  </li>
                </ul>
              </span>
            </article>
            <span className="text-left space-y-3">
              <h2 className="text-[#8E91A1] text-sm border-b border-[#F4F4F4]">
                Tutor's Comment
              </h2>
              <textarea className="h-28 w-xl bg-[#F4F4F4] rounded-2xl text-black flex p-3.5"></textarea>
            </span>
            <span className="space-x-3">
              <button className="border border-[#BEBEC1] w-36 h-11 py-2 px-3.5 text-[#5C5E65] text-sm rounded-3xl mt-10">
                Save As Draft
              </button>
              <button className="bg-[#1E1F27] py-2 px-3.5 w-36 h-11 text-white rounded-3xl mt-10">
                Submit Grade
              </button>
            </span>
          </motion.article>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default gradingOverlay;
