"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../app/page.module.css";
const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.fixed}>
      <ul className="d-flex list-unstyled gap-5 mx-4 mt-3">
        <Link href="/" className="text_nav_lg">Home</Link>
        <Link href="/" className="text_nav_lg">About</Link>
        <Link href="/" className="text_nav_lg">Products</Link>
        <Link href="/" className="text_nav_lg">Services</Link>
        <Link href="/" className="text_nav_lg">Blog</Link>
        <Link href="/" className="text_nav_lg">Contact us</Link>
      </ul>
    </nav>
  )
}

export default NavigationBar
