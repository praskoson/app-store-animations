import { motion } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { items } from "./data";

export function Item({ id }: { id: string }) {
  const { category, title } = items.find((item) => item.id === id)!;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ pointerEvents: "auto" }}
        className="z-1 fixed bg-black/80 will-change-[opacity] top-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[990px]"
      >
        <Link
          className="block fixed top-0 bottom-0 w-screen left-1/2 -translate-x-1/2"
          to="/"
        />
      </motion.div>
      <div className="fixed top-0 left-0 right-0 z-[1] overflow-hidden py-10 block pointer-events-none">
        <motion.div
          className="h-auto max-w-[700px] overflow-hidden pointer-events-none relative rounded-[20px] bg-[#1c1c1e] w-full my-0 mx-auto"
          layoutId={`card-content-${id}`}
        >
          <motion.div
            className="z-[1] absolute top-0 left-0 overflow-hidden h-[420px] w-screen"
            layoutId={`card-image-container-${id}`}
          >
            <img src={`images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="z-[2] absolute top-[30px] left-[30px] max-w-[300px]"
            layoutId={`title-container-${id}`}
          >
            <span className="text-sm text-white uppercase">{category}</span>
            <h2 className="font-semibold text-white my-2 text-xl">{title}</h2>
          </motion.div>
          <motion.div
            className="w-[90vw] max-w-[700px] px-[35px] pb-[35px] pt-[460px]"
            animate
          >
            <LoremIpsum
              p={6}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
