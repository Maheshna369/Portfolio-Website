import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        MAIPHY Chat – Data Deletion Instructions
      </h1>
      <p className="mb-4">
        If you signed in with Facebook and want your data removed from MAIPHY
        Chat, please follow the steps below:
      </p>
      <ol className="list-decimal list-inside space-y-3 mb-6">
        <li>
          Send an email to{" "}
          <a
            href="mailto:maheshnayak9639@gmail.com"
            className="text-blue-600 underline"
          >
            maheshnayak9639@gmail.com
          </a>{" "}
          with the subject: <code>Delete My Data</code>
        </li>
        <li>Include your Facebook email or username in the message.</li>
        <li>We’ll delete your data within 7 business days.</li>
      </ol>
      <p className="text-sm text-gray-500">
        Your privacy matters to us. We only store data necessary for app
        functionality.
      </p>
    </div>
  );
};

export default page;
