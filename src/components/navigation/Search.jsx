import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/filter/filterSlice";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  const [searchDebounce, setSearchDebounce] = useState("");
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      const trimmedInput = input.trim();
      setSearchDebounce(trimmedInput);
      dispatch(setSearchTerm(trimmedInput));
      navigate("/");
    }, 1000);

    return () => clearTimeout(timer);
  }, [input, dispatch, navigate]);

  return (
    <form>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}
