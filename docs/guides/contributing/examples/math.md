---
title: Math
description: How to format math equations in Catalyst Guides!
icon: material/square-root
---

# Math Formatting

Catalyst Guides uses [MathJax](https://www.mathjax.org) to render math equations.

You can use [AsciiMath](https://asciimath.org) to generate math equations, syntax is available at the bottom of the page.

For the plugin to detect a math equation the `$` must be followed by a non-whitespace character and the closing `$` must be preceded by a non-whitespace character.

This prevents the false positives when using the dollar sign in traditional ways like: *I owe Bob $10 and Sally $5*.

---

## Block Syntax

Block equations must be enclosed with `$$...$$` on separate lines.

```
$$
\cos x=\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k)!}x^{2k}
$$
```

<div class="result" markdown>
$$
\cos x=\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k)!}x^{2k}
$$
</div>

---

## Inline Block Syntax

Inline equations must be enclosed with `$...$`

```
The homomorphism $f$ is injective if and only if its kernel is only the
singleton set $e_G$, because otherwise $\exists a,b\in G$ with $a\neq b$ such
that $f(a)=f(b)$.
```

<div class="result" markdown>
The homomorphism $f$ is injective if and only if its kernel is only the
singleton set $e_G$, because otherwise $\exists a,b\in G$ with $a\neq b$ such
that $f(a)=f(b)$.
</div>

---
