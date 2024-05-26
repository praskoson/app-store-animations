import { Link } from "react-router-dom";
import { items } from "./data";
import { motion } from "framer-motion";

export function List() {
  return (
    <ul className="flex flex-wrap items-start">
      {items.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          category={card.category}
          theme={card.backgroundColor}
        />
      ))}
    </ul>
  );
}

function Card({
  id,
  title,
  category,
}: {
  id: string;
  title: string;
  category: string;
  theme: string;
}) {
  return (
    <li className="relative p-6 h-[460px] flex-[0_0_40%] max-w-[40%] odd:pl-0 even:pr-0 [&:nth-child(4n+1)]:flex-[0_0_60%] [&:nth-child(4n+1)]:max-w-[60%] [&:nth-child(4n+4)]:flex-[0_0_60%] [&:nth-child(4n+4)]:max-w-[60%]">
      <div className="relative size-full block pointer-events-none">
        <motion.div
          className="pointer-events-none relative rounded-[20px] bg-[#1c1c1e] overflow-hidden h-full mx-auto my-0"
          layoutId={`card-content-${id}`}
        >
          <motion.div
            className="absolute inset-0 overflow-hidden h-[420px] w-screen"
            layoutId={`card-image-container-${id}`}
          >
            <img src={`images/${id}.jpg`} alt="" />
          </motion.div>

          <motion.div
            className="absolute top-4 left-4 max-w-[300px]"
            layoutId={`title-container-${id}`}
          >
            <span className="text-sm text-white uppercase">{category}</span>
            <h2 className="font-semibold text-white my-2 text-xl">{title}</h2>
          </motion.div>
        </motion.div>
      </div>

      <Link to={id} className="absolute inset-0" />
    </li>
  );
}
