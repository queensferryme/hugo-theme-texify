---
title: "Mathjax Support"
date: 2019-07-28T09:10:30+08:00
draft: false
---

设函数 $f(x,y)$ 在曲线 $L$ 上连续且参数方程为

$$
\left\{
\begin{aligned}
x=\varphi(t),\\
y=\psi(t),\\
\end{aligned}
\right.\quad
(\alpha\leq t\leq\beta)
$$

其中 $\varphi(t),\psi(t)$ 在 $[\alpha,\beta]$ 上具有一阶连续导数，且 $\varphi^{'2}(t)+\psi^{'2}(t)\neq0$，则

$$
\displaystyle
\int_Lf(x,y)\text{d}x=
\int_\alpha^\beta f[\varphi(t),\psi(t)]
\sqrt{\varphi^{'2}(t)+\psi^{'2}(t)}\text{d}t
$$
