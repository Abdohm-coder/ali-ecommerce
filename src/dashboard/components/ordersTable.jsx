import { Paper, Table } from "@mantine/core";
import React from "react";

function OrdersTable() {
  let elements = [
    {
      name: "semaoui aissa",
      position: "graphic designer",
      QTY: (Math.random() * 100).toFixed(0),
      Price: `${(Math.random() * 100).toFixed(0)} DA`,
      Discount: `${(Math.random() * 100).toFixed(0)}%`,
    },
    {
      name: "semaoui aissa",
      position: "graphic designer",
      QTY: (Math.random() * 100).toFixed(0),
      Price: `${(Math.random() * 100).toFixed(0)} DA`,
      Discount: `${(Math.random() * 100).toFixed(0)}%`,
    },
    {
      name: "semaoui aissa",
      position: "graphic designer",
      QTY: (Math.random() * 100).toFixed(0),
      Price: `${(Math.random() * 100).toFixed(0)} DA`,
      Discount: `${(Math.random() * 100).toFixed(0)}%`,
    },
    {
      name: "semaoui aissa",
      position: "graphic designer",
      QTY: (Math.random() * 100).toFixed(0),
      Price: `${(Math.random() * 100).toFixed(0)} DA`,
      Discount: `${(Math.random() * 100).toFixed(0)}%`,
    },
  ];

  const rows = elements.map((element) => (
    <tr key={element.name} className="text-left">
      <td>{element.Price}</td>
      <td>{element.Discount}</td>
      <td>{element.QTY}</td>
      <td>{element.position}</td>
      <td>{element.name}</td>
    </tr>
  ));

  return (
    <Paper shadow="xs" className="overflow-x-auto">
      <Table
        horizontalSpacing="md"
        verticalSpacing="sm"
        highlightOnHover
        className="w-full min-w-max">
        <thead>
          <tr>
            <th>Price</th>
            <th>Discount</th>
            <th>QTY</th>
            <th>Position</th>
            <th>Client Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Paper>
  );
}

export default OrdersTable;
