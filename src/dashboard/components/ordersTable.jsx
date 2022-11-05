import { Paper, Table } from "@mantine/core";
import React from "react";
import { useDataContext } from "../../utils/data.context";
import { orders } from "../../data/order";

function OrdersTable() {
  const rows = orders.map(
    ({ client_details, order_details, order_id, product_name }) => (
      <tr key={order_id} className="text-right">
        <td>{order_id}</td>
        <td>{client_details?.client_name}</td>
        <td>{product_name}</td>
        <td>{`${client_details?.client_state}, ${client_details?.client_city}`}</td>
        <td>{client_details?.client_phone}</td>
        <td>{order_details?.quantity}</td>
        <td>{order_details?.product_price}</td>
        <td>
          {order_details?.discount
            ? `${order_details?.discount_type === "percentage" ? "%" : "دج "} ${
                order_details?.discount_value
              }`
            : ""}
        </td>
        <td>{order_details?.price_total}</td>
      </tr>
    )
  );
  return (
    <Paper shadow="xs" className="overflow-x-auto">
      <Table
        horizontalSpacing="md"
        verticalSpacing="sm"
        highlightOnHover
        className="w-full min-w-max orders-table">
        <thead>
          <tr>
            <th style={{ textAlign: "right" }}>Id</th>
            <th style={{ textAlign: "right" }}>Client name</th>
            <th style={{ textAlign: "right" }}>Product name</th>
            <th style={{ textAlign: "right" }}>Address</th>
            <th style={{ textAlign: "right" }}>Phone number</th>
            <th style={{ textAlign: "right" }}>Quantity</th>
            <th style={{ textAlign: "right" }}>Price</th>
            <th style={{ textAlign: "right" }}>Discount</th>
            <th style={{ textAlign: "right" }}>Price total</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Paper>
  );
}

export default OrdersTable;
