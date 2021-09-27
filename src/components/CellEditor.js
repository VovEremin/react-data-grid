import React, { useEffect, useState } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import GenderRenderer from './genderRenderer.jsx';
import NumericEditor from './numericEditor.jsx';
import { rowPersons, rowCountrys } from '../data/persons.js';

export default function CellEditor ({darkState, person}) {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  
  const [persons, setPersons] = useState(rowPersons)
  const [countrys, setCountrys] = useState(rowCountrys)
    
  useEffect(() => {
    setPersons([ person, ...persons])
    setCountrys([...countrys, person.country])
  }, [person])

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  return (
    <div style={{ width: '70vw', height: '50vh' }}>
      <div
              id="myGrid"
              style={{
                  height: '100%',
                  width: '100%',
              }}
              className={`ag-theme-alpine${darkState ? '-dark' : ""}`}
      >
        <AgGridReact
          rowSelection={'multiple'}
          rowData={persons}
          defaultColDef={{
            editable: true,
            sortable: true,
            flex: 1,
            minWidth: 100,
            filter: true,
            resizable: true,
          }}
          frameworkComponents={{
            genderCellRenderer: GenderRenderer,
            numericCellEditor: NumericEditor,
          }}
          onGridReady={onGridReady}
        >
          <AgGridColumn
            field="first_name"
            headerName="First Name"
            width={120}
            editable={true}
          />
          <AgGridColumn
            field="last_name"
            headerName="Last Name"
            width={120}
            editable={true}
          />
          <AgGridColumn
            field="gender"
            width={100}
            editable={true}
            cellRenderer="genderCellRenderer"
            cellEditor="agRichSelectCellEditor"
            cellEditorParams={{
              cellRenderer: 'genderCellRenderer',
              values: ['Male', 'Female'],
            }}
          />
          <AgGridColumn
            field="age"
            width={80}
            editable={true}
            cellEditor="numericCellEditor"
          />
          <AgGridColumn
            field="country"
            width={110}
            cellEditor="agRichSelectCellEditor"
            cellRenderer={countryCellRenderer}
            keyCreator={(country) => {
              return country.name;
            }}
            cellEditorParams={{
              cellRenderer: countryCellRenderer,
              values: countrys,
            }}
            editable={true}
          />
          <AgGridColumn
            field="address"
            editable={true}
            cellEditor="agLargeTextCellEditor"
            cellEditorParams={{ maxLength: '300', cols: '50', rows: '6' }}
          />
        </AgGridReact>
      </div>
    </div>
  );
};

const countryCellRenderer = (params) => params.value.name;

