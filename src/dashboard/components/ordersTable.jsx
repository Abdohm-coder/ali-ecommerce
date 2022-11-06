import { Paper, Table } from "@mantine/core";
import React from "react";
import { useDataContext } from "../../utils/data.context";

function OrdersTable({ orders }) {
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
        <td>{`${order_details?.discount_price} دج`}</td>
        <td>
          {order_details?.discount
            ? `${order_details?.discount_type === "percentage" ? "%" : "دج "} ${
                order_details?.discount_value
              }`
            : "دون تخفيض"}
        </td>
        <td>{`${order_details?.price_total} دج`}</td>
      </tr>
    )
  );
  return (
    <Paper shadow="xs" className="overflow-x-auto border-[1px] border-light">
      <Table
        horizontalSpacing="md"
        verticalSpacing="md"
        highlightOnHover
        className="w-full min-w-max orders-table">
        <thead>
          <tr>
            <th style={{ textAlign: "right" }}>ID</th>
            <th style={{ textAlign: "right" }}>إسم الزبون</th>
            <th style={{ textAlign: "right" }}>إسم المنتج</th>
            <th style={{ textAlign: "right" }}>العنوان</th>
            <th style={{ textAlign: "right" }}>رقم الهاتف</th>
            <th style={{ textAlign: "right" }}>الكمية</th>
            <th style={{ textAlign: "right" }}>السعر</th>
            <th style={{ textAlign: "right" }}>السعر بعد التخفيض</th>
            <th style={{ textAlign: "right" }}>قيمة التخفيض</th>
            <th style={{ textAlign: "right" }}>المجموع</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Paper>
  );
}

export default OrdersTable;
