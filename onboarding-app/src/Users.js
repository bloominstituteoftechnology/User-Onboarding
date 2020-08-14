import React from "react";
import { Card } from "./Styles";
import { AnimatePresence } from "framer-motion";

export default function User(props) {
  const { details } = props;

  return (
    <AnimatePresence>
      <Card
        exit={{ opacity: 0, x: 100 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="userCard">
          <h2>{details.name}</h2>
          <h4>{details.role}</h4>
          <span>{details.email}</span>
        </div>
      </Card>
    </AnimatePresence>
  );
}
