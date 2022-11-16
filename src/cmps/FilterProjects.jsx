import React from 'react'

export function FilterProjects({ onChangeFilter }) {
  const filterBy = (e) => {
    onChangeFilter(e.target.value)
  };

  return (
    <div className="filter">
      <select
        onChange={(event) => filterBy(event)}
        name="projects"
        id="projects"
      >
        <option value="all">All</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </select>
    </div>
  );
}
