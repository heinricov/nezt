import { NextResponse } from "next/server";

const users = [
  { id: 1, nama: "Budi Santoso", gender: "pria" },
  { id: 2, nama: "Siti Nurhaliza", gender: "wanita" },
  { id: 3, nama: "Agus Setiawan", gender: "pria" },
  { id: 4, nama: "Dewi Lestari", gender: "wanita" },
  { id: 5, nama: "Eko Prasetyo", gender: "pria" },
  { id: 6, nama: "Rina Wati", gender: "wanita" },
  { id: 7, nama: "Joko Widodo", gender: "pria" },
  { id: 8, nama: "Mega Wati", gender: "wanita" },
  { id: 9, nama: "Bambang Tri", gender: "pria" },
  { id: 10, nama: "Ani Yudhoyono", gender: "wanita" }
];

export async function GET() {
  return NextResponse.json(users);
}
