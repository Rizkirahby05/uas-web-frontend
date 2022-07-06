import categories from "../dataCategory";
import { BiArrowFromRight } from "react-icons/bi";
import { MdMoreHoriz } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import BookContext from "../BookContext";

const Categories = () => {
    
  const { setActiveCategory, activeCategory, setFiltered, books, header } =
    useContext(BookContext);

  const [moreCategory, setMoreCategory] = useState(false);

  useEffect(() => {
    if (activeCategory === 0) {
      setFiltered(books);
    } else {
      const filtered = books.filter(function (a) {
        return a.genres.some(function (b) {
            return b.id === activeCategory;
        });
    });
      setFiltered(filtered);
    }
  }, [activeCategory, header]);
  return (
    <div className="categories-container">
      <button className={activeCategory === 0 ? "active" : null}
        onClick={() => setActiveCategory(0)} >Semua</button>
      <button  className={activeCategory === 1 ? "active" : null}
        onClick={() => setActiveCategory(1)}>Sosial dan Psikologi</button>
      <button  className={activeCategory === 2 ? "active" : null}
        onClick={() => setActiveCategory(2)}>Bisnis dan Ekonomi</button>
      <button  className={activeCategory === 3 ? "active" : null}
        onClick={() => setActiveCategory(3)}>Fiksi</button>
      {moreCategory &&
        categories.map((category) => (
          <button
            key={category.id}
            className={activeCategory === category.id ? "active" : null}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      <button className="more" onClick={() => setMoreCategory(!moreCategory)}>
        {moreCategory ? <BiArrowFromRight /> : <MdMoreHoriz />}
      </button>
    </div>
  );
};

export default Categories;
