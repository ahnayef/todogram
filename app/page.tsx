"use client"

import Link from 'next/link'
import style from './page.module.css'
import "@/app/assets/icon/style.css"
import { useEffect } from "react";

export default function Home() {


  useEffect(()=>{
    let width = screen.width;
    if(width <= 425){
        alert("Please use desktop for now. Mobile version will be available soon.");
        location.assign("https://github.com/ahnayef");
    }
},[])

  return (
    <div className={style.home}>
      <div className={style.left}>
          <Link href="/login" className={style.btn}>Log in</Link>
          <Link href="/signup" className={style.btn}>Sign up</Link>
      </div>
      <div className={style.right}>
        <div className={style.todoBox}>
          <h1>Todo</h1>
          <p>Small steps, big impact.</p>
          <Link href="/todo" className={style.btn}>Create your first todo</Link>
          <i className="icon-check"></i>
        </div>
      </div>
    </div>
  )
}
