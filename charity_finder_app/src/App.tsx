import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const App: React.FC = () => {
  const [organizationName, setOrganizationName] = useState<Array<string>>();

  return (
    <>
      <div>組織名：</div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={[1, 2, 3]}
          label="Age"
          //onChange={onChangeHandler()}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <div>組織の母国：</div>
      <div>組織がサービスを提供している国：</div>
    </>
  );
};

export default App;
