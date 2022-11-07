import { Paper, Table } from "@mantine/core";
import React from "react";
function OrdersTable({ orders }) {
  const rows = orders?.map(
    ({ client_details, order_details, product_name }) => (
      <tr key={order_details?.id} className="text-right">
        <td>{order_details?.id}</td>
        <td>{client_details?.client_name}</td>
        <td>{product_name}</td>
        <td>{`${client_details?.client_state}, ${client_details?.client_city}`}</td>
        <td>{`${client_details?.client_state}, ${client_details?.client_city}`}</td>
        <td>{client_details?.client_phone}</td>
        <td>{order_details?.quantity}</td>
        <td>{order_details?.product_price}</td>
        <td>{order_details?.discount ?`${order_details?.discount_price} دج` : "دون تخفيض"}</td>
        <td>
          {order_details?.discount
            ? `${order_details?.discount_type === "percentage" ? "%" : "دج "} ${
                order_details?.discount_type === "percentage"
                  ? order_details?.discount_percentage_value
                  : order_details?.discount_value
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
            <th style={{ textAlign: "right" }}>إسم الولاية</th>
            <th style={{ textAlign: "right" }}>إسم البلدية</th>
            <th style={{ textAlign: "right" }}>رقم الهاتف</th>
            <th style={{ textAlign: "right" }}>الكمية</th>
            <th style={{ textAlign: "right" }}>سعر المنتج</th>
            <th style={{ textAlign: "right" }}>السعر بعد التخفيض</th>
            <th style={{ textAlign: "right" }}>قيمة التخفيض</th>
            <th style={{ textAlign: "right" }}>المجموع</th>
          </tr>
        </thead>
        {orders?.length === 0 ? (
          <tbody className="text-center relative h-14 w-full">
            <tr className="absolute left-1/2"><td>لا توجد طلبات</td></tr>
          </tbody>
        ) : (
          <tbody>{rows}</tbody>
        )}
      </Table>
    </Paper>
  );
}

export default OrdersTable;
