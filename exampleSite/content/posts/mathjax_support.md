---
title: "Mathjax Support"
date: 2019-07-28T09:10:30+08:00
draft: false
---

梯度下降法算法步骤如下：

（1）确定优化模型的假设函数及损失函数。
​	举例，对于线性回归，假设函数为：
<div>
$$
  h_\theta(x_1,x_2,...,x_n)=\theta_0+\theta_1x_1+...+\theta_nx_n
$$
</div>
  其中，$\theta_i,x_i(i=0,1,2,...,n)$分别为模型参数、每个样本的特征值。
  对于假设函数，损失函数为：
$$
  J(\theta_0,\theta_1,...,\theta\_n)=\frac{1}{2m}\sum^{m}\_{j=0}(h\_\theta (x^{(j)}\_0
  	,x^{(j)}\_1,...,x^{(j)}\_n)-y\_j)^2
$$

<!--more-->

（2）相关参数初始化。
​	主要初始化${\theta}_i$、算法迭代步长${\alpha} $、终止距离${\zeta} $。初始化时可以根据经验初始化，即${\theta} $初始化为0，步长${\alpha} $初始化为1。当前步长记为${\varphi}_i $。当然，也可随机初始化。

（3）迭代计算。

​	1）计算当前位置时损失函数的梯度，对${\theta}_i $，其梯度表示为：
$$
\frac{\partial}{\partial \theta\_i}J({\theta}\_0,{\theta}\_1,...,{\theta}\_n)=\frac{1}{2m}\sum^{m}\_{j=0}(h\_\theta (x^{(j)}_0
	,x^{(j)}\_1,...,x^{(j)}\_n)-y\_j)^2
$$
​	2）计算当前位置下降的距离。
<div>
$$
{\varphi}_i={\alpha} \frac{\partial}{\partial \theta_i}J({\theta}_0,{\theta}_1,...,{\theta}_n)
$$
</div>
​	3）判断是否终止。
​	确定是否所有${\theta}_i$梯度下降的距离${\varphi}_i$都小于终止距离${\zeta}$，如果都小于${\zeta}$，则算法终止，当然的值即为最终结果，否则进入下一步。
​	4）更新所有的${\theta}_i$，更新后的表达式为：
<div>
$$
{\theta}_i={\theta}_i-\alpha \frac{\partial}{\partial \theta_i}J({\theta}_0,{\theta}_1,...,{\theta}_n)
$$
</div>
$$
\theta\_i=\theta\_i - \alpha \frac{1}{m} \sum^{m}\_{j=0}(h\_\theta (x^{(j)}\_0
	,x^{(j)}\_1,...,x^{(j)}\_n)-y\_j)x^{(j)}\_i
$$
​	5）令上式$x^{(j)}_0=1$，更新完毕后转入1)。
​	由此，可看出，当前位置的梯度方向由所有样本决定，上式中 $\frac{1}{m}$、$\alpha \frac{1}{m}$ 的目的是为了便于理解。