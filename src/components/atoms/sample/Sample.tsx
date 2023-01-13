import React, {useState, useEffect} from "react";

interface SampleProps {
  name: string;
  title?: string;
}

const Base = ({name, title}: SampleProps) => {
  const [prova, setProva] = useState("");

  useEffect(() => {
    setProva("prova!");
  }, []);

  return (
    <div>
      <header>
        <h1 className="mt-4 mb-5">Doggy Directory 🐶</h1>
      </header>
      <select className="form-select w-25" role="combobox" aria-label="Select a breed of dog to display results">
        <option value="" disabled>
          Select a breed
        </option>
      </select>
      <button type="button" className="btn btn-info mx-2" disabled={true}>
        Search
      </button>
      Sample {name} {prova}
    </div>
  );
};

export default Base;
