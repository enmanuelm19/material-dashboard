import React from "react";
import { Grid } from "material-ui";
import axios from "axios";
import { RegularCard, Table, ItemGrid } from "components";

class TableList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tableData: null,
      tableHead: null
    }
    axios({
      method: 'get',
      url: 'http://localhost:3001/categories',
    }).then((response) =>{
      let tableHead = Object.keys(response.data[0]);
      let tableData = response.data.map((category) => {
        return Object.values(category)
      });
      this.setState({tableHead: tableHead, tableData: tableData});
    })
  }

  render(){
  if(!this.state.tableHead && !this.state.tableData){
    return (
      <div> Cargando...</div>
    )
  }
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="Simple Table"
          cardSubtitle="Here is a subtitle for this table"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={this.state.tableHead}
              tableData={this.state.tableData}
            />
          }
        />
      </ItemGrid>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          plainCard
          cardTitle="Table on Plain Background"
          cardSubtitle="Here is a subtitle for this table"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park"
                ],
                [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten"
                ],
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
              ]}
            />
          }
        />
      </ItemGrid>
    </Grid>
  );
  }
}

export default TableList;
