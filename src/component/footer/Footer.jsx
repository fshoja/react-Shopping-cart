import React from 'react'
import './Footer.css'
import { PiPhone } from 'react-icons/pi'
import { MdEmail } from 'react-icons/md'
import { BsInstagram, BsTelegram, BsWhatsapp } from 'react-icons/bs'
import { CgInstagram } from 'react-icons/cg'
export default function Footer() {
  return (
<footer className="footer">
<div className="footer-top">
  <h2 className="footer-logo">ReactShop</h2>
  <p className="footer-desc">بهترین تجربه خرید انلاین با محصولات با کیفیت و ارسال سریع. </p>
</div>
<div className="footer-link">
<div>

<ul>
  <a href="#"><li>محصولات</li></a>
<a href="#"><li>سبد خرید</li></a>
<a href="#"><li>تماس با ما</li></a>
<a href="#"><li>درباره ما</li></a>

</ul>
</div>
<div>


<h3>شبکه اجتماعی</h3>

<ul>
  <a href="#"><li>اینستاگرام</li></a>
  <a href="#"><li>تلگرام</li></a>
  <a href="#"><li>واتساپ</li></a>
</ul>
</div>
</div>

<div className="footer-btn">
  <p>@ 2026 ReactShop</p>
</div>
</footer>
  )
}
