import React from "react";

type ModalProps = {
  onClose: () => void;
  isModalOpen: boolean;
};

const AddStudent = ({ onClose, isModalOpen }: ModalProps) => {
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm">
        {/* main content */}
        <article className="relative bg-white p-6 rounded-2xl shadow-xl z-10 w-2xl">
          <span>
            <h2 className="text-[#848797]">Student Enrollment</h2>
          </span>
        </article>
      </div>
    </section>
  );
};

export default AddStudent;
