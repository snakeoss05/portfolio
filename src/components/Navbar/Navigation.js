import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { useControl } from "../../Context/control";
export default function Navigation({ toggle }) {
  const { sliderState } = useControl();
  const variants = {
    open: {
      transition: { opacity: 1, staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { opacity: 0, staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const itemIds = [
    {
      text: "Home",
      slide: function () {
        sliderState(0);
        return toggle;
      },
    },
    {
      text: "About Me",
      slide: function () {
        sliderState(1);
        return toggle;
      },
    },
    {
      text: "My Work",
      slide: function () {
        sliderState(2);
        return toggle;
      },
    },
    {
      text: "Contact",
      slide: function () {
        sliderState(3);
        return toggle;
      },
    },
    {
      text: "My Résumé",
      link: "myresume",
    },
  ];

  return (
    <motion.ul variants={variants}>
      {itemIds.map((i) => (
        <MenuItem i={i} />
      ))}
    </motion.ul>
  );
}
