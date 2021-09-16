import "./App.css";
import { useState, useEffect } from "react";
import Form from "./Form";
import schema from "./validation/formSchema";
import axios from "axios";
import * as yup from "yup";
import { Fragment } from "react";
import { Menu, Popover, Transition, Disclosure } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import { DotsVerticalIcon } from "@heroicons/react/solid";

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  terms: false,
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
};

const initialUsers = [];
const initialDisabled = true;

// new stuff

const projects = [
  {
    name: "Graph API",
    initials: "GA",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "Component Design",
    initials: "CD",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "Templates",
    initials: "T",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "React Components",
    initials: "RC",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
];

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Profile", href: "#", current: false },
  { name: "Resources", href: "#", current: false },
  { name: "Company Directory", href: "#", current: false },
  { name: "Openings", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// new stuff

function App() {
  const [users, getUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        console.log(res.data);
        getUsers(users.concat(res.data));
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.error(err);
        setFormValues(initialFormValues);
      });
    setDisabled(initialDisabled);
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
  };

  // useEffect(() => {
  //   setUsers()
  // }, [])

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <div className="bg-indigo-600 pb-32">
          <Disclosure
            as="nav"
            className="bg-indigo-600 border-b border-indigo-300 border-opacity-25 lg:border-none"
          >
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                  <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                    <div className="px-2 flex items-center lg:px-0">
                      <div className="flex-shrink-0">
                        <img
                          className="block h-8 w-8"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                          alt="Workflow"
                        />
                      </div>
                      <div className="hidden lg:block lg:ml-10">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-indigo-700 text-white"
                                  : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                                "rounded-md py-2 px-3 text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
                      <div className="max-w-lg w-full lg:max-w-xs">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative text-gray-400 focus-within:text-gray-600">
                          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                            <SearchIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            id="search"
                            className="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm"
                            placeholder="Search"
                            type="search"
                            name="search"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex lg:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="bg-indigo-600 p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden lg:block lg:ml-4">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="bg-indigo-600 flex-shrink-0 rounded-full p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="ml-3 relative flex-shrink-0">
                          <div>
                            <Menu.Button className="bg-indigo-600 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="rounded-full h-8 w-8"
                                src={user.imageUrl}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block py-2 px-4 text-sm text-gray-700"
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="lg:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-indigo-700 text-white"
                            : "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                          "block rounded-md py-2 px-3 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="pt-4 pb-3 border-t border-indigo-700">
                    <div className="px-5 flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="rounded-full h-10 w-10"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-white">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium text-indigo-300">
                          {user.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ml-auto bg-indigo-600 flex-shrink-0 rounded-full p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 px-2 space-y-1">
                      {userNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
              {" "}
              <Form
                values={formValues}
                change={inputChange}
                submit={formSubmit}
                disabled={disabled}
                errors={formErrors}
              />
            </div>
            {/* /End replace */}
          </div>
        </main>
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <ul
              role="list"
              className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {users.map((user) => (
                <li
                  key={user.username}
                  className="col-span-1 flex shadow-sm rounded-md"
                >
                  <div
                    className={classNames(
                      "bg-green-500",
                      "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
                    )}
                  ></div>
                  <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                    <div className="flex-1 px-4 py-2 text-sm truncate">
                      {user.username}
                      <p className="text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
