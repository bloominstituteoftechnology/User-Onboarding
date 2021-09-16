import React from "react";

export default function Form(props) {
  const { values, submit, change, errors, disabled } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };
  return (
    <div className="space-y-6">
      <div className="bg-white  py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Sign Up
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Enter your information to sign up for the site.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            {/* <form onSubmit={onSubmit}> */}
            <form action="#" method="POST" onSubmit={onSubmit}>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    name="username"
                    type="text"
                    value={values.username}
                    onChange={onChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="text"
                    value={values.email}
                    onChange={onChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    name="password"
                    type="text"
                    value={values.password}
                    onChange={onChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="relative flex items-start mt-6">
                <div className="flex items-center h-5">
                  <input
                    name="terms"
                    type="checkbox"
                    value={values.terms}
                    checked={values.terms}
                    onChange={onChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="comments"
                    className="font-medium text-gray-700"
                  >
                    I agree to the terms of service
                  </label>
                  <span id="comments-description" className="text-gray-500">
                    <span className="sr-only">
                      I agree to the terms of service
                    </span>
                  </span>
                </div>
              </div>
              <button
                disabled={disabled}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
