(() => {
  var __defProp = Object.defineProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

  // node_modules/kaboom/dist/kaboom.mjs
  var Gt = Object.defineProperty;
  var xn = Object.defineProperties;
  var wn = Object.getOwnPropertyDescriptors;
  var zt = Object.getOwnPropertySymbols;
  var En = Object.prototype.hasOwnProperty;
  var vn = Object.prototype.propertyIsEnumerable;
  var Et = /* @__PURE__ */ __name((e, t, r) => t in e ? Gt(e, t, { enumerable: true, configurable: true, writable: true, value: r }) : e[t] = r, "Et");
  var ne = /* @__PURE__ */ __name((e, t) => {
    for (var r in t || (t = {}))
      En.call(t, r) && Et(e, r, t[r]);
    if (zt)
      for (var r of zt(t))
        vn.call(t, r) && Et(e, r, t[r]);
    return e;
  }, "ne");
  var ie = /* @__PURE__ */ __name((e, t) => xn(e, wn(t)), "ie");
  var s = /* @__PURE__ */ __name((e, t) => Gt(e, "name", { value: t, configurable: true }), "s");
  var ae = /* @__PURE__ */ __name((e, t) => () => (e && (t = e(e = 0)), t), "ae");
  var Bn = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "Bn");
  var Zt = /* @__PURE__ */ __name((e, t, r) => (Et(e, typeof t != "symbol" ? t + "" : t, r), r), "Zt");
  var Jt = /* @__PURE__ */ __name((e, t, r) => new Promise((u, b) => {
    var B = /* @__PURE__ */ __name((D) => {
      try {
        T(r.next(D));
      } catch (z) {
        b(z);
      }
    }, "B"), v = /* @__PURE__ */ __name((D) => {
      try {
        T(r.throw(D));
      } catch (z) {
        b(z);
      }
    }, "v"), T = /* @__PURE__ */ __name((D) => D.done ? u(D.value) : Promise.resolve(D.value).then(B, v), "T");
    T((r = r.apply(e, t)).next());
  }), "Jt");
  var Nt = (() => {
    for (var e = new Uint8Array(128), t = 0; t < 64; t++)
      e[t < 26 ? t + 65 : t < 52 ? t + 71 : t < 62 ? t - 4 : t * 4 - 205] = t;
    return (r) => {
      for (var u = r.length, b = new Uint8Array((u - (r[u - 1] == "=") - (r[u - 2] == "=")) * 3 / 4 | 0), B = 0, v = 0; B < u; ) {
        var T = e[r.charCodeAt(B++)], D = e[r.charCodeAt(B++)], z = e[r.charCodeAt(B++)], W = e[r.charCodeAt(B++)];
        b[v++] = T << 2 | D >> 4, b[v++] = D << 4 | z >> 2, b[v++] = z << 6 | W;
      }
      return b;
    };
  })();
  function xe(e) {
    return e * Math.PI / 180;
  }
  __name(xe, "xe");
  function vt(e) {
    return e * 180 / Math.PI;
  }
  __name(vt, "vt");
  function me(e, t, r) {
    return t > r ? me(e, r, t) : Math.min(Math.max(e, t), r);
  }
  __name(me, "me");
  function Ne(e, t, r) {
    return e + (t - e) * r;
  }
  __name(Ne, "Ne");
  function Ie(e, t, r, u, b) {
    return u + (e - t) / (r - t) * (b - u);
  }
  __name(Ie, "Ie");
  function jt(e, t, r, u, b) {
    return me(Ie(e, t, r, u, b), u, b);
  }
  __name(jt, "jt");
  function a(...e) {
    if (e.length === 0)
      return a(0, 0);
    if (e.length === 1) {
      if (typeof e[0] == "number")
        return a(e[0], e[0]);
      if (Le(e[0]))
        return a(e[0].x, e[0].y);
      if (Array.isArray(e[0]) && e[0].length === 2)
        return a.apply(null, e[0]);
    }
    return { x: e[0], y: e[1], clone() {
      return a(this.x, this.y);
    }, add(...t) {
      let r = a(...t);
      return a(this.x + r.x, this.y + r.y);
    }, sub(...t) {
      let r = a(...t);
      return a(this.x - r.x, this.y - r.y);
    }, scale(...t) {
      let r = a(...t);
      return a(this.x * r.x, this.y * r.y);
    }, dist(...t) {
      let r = a(...t);
      return Math.sqrt((this.x - r.x) * (this.x - r.x) + (this.y - r.y) * (this.y - r.y));
    }, len() {
      return this.dist(a(0, 0));
    }, unit() {
      return this.scale(1 / this.len());
    }, normal() {
      return a(this.y, -this.x);
    }, dot(t) {
      return this.x * t.x + this.y * t.y;
    }, angle(...t) {
      let r = a(...t);
      return vt(Math.atan2(this.y - r.y, this.x - r.x));
    }, lerp(t, r) {
      return a(Ne(this.x, t.x, r), Ne(this.y, t.y, r));
    }, toFixed(t) {
      return a(this.x.toFixed(t), this.y.toFixed(t));
    }, eq(t) {
      return this.x === t.x && this.y === t.y;
    }, str() {
      return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    } };
  }
  __name(a, "a");
  function st(e) {
    let t = xe(e);
    return a(Math.cos(t), Math.sin(t));
  }
  __name(st, "st");
  function Ce(e, t, r) {
    return { x: e, y: t, z: r, xy() {
      return a(this.x, this.y);
    } };
  }
  __name(Ce, "Ce");
  function Le(e) {
    return e !== void 0 && e.x !== void 0 && e.y !== void 0;
  }
  __name(Le, "Le");
  function Ht(e) {
    return e !== void 0 && e.x !== void 0 && e.y !== void 0 && e.z !== void 0;
  }
  __name(Ht, "Ht");
  function Xe(e) {
    return e !== void 0 && e.r !== void 0 && e.g !== void 0 && e.b !== void 0;
  }
  __name(Xe, "Xe");
  function Qt(e) {
    if (e !== void 0 && Array.isArray(e.m) && e.m.length === 16)
      return e;
  }
  __name(Qt, "Qt");
  function N(...e) {
    if (e.length === 0)
      return N(255, 255, 255);
    if (e.length === 1) {
      if (Xe(e[0]))
        return N(e[0].r, e[0].g, e[0].b);
      if (Array.isArray(e[0]) && e[0].length === 3)
        return N.apply(null, e[0]);
    }
    return { r: me(~~e[0], 0, 255), g: me(~~e[1], 0, 255), b: me(~~e[2], 0, 255), clone() {
      return N(this.r, this.g, this.b);
    }, lighten(t) {
      return N(this.r + t, this.g + t, this.b + t);
    }, darken(t) {
      return this.lighten(-t);
    }, invert() {
      return N(255 - this.r, 255 - this.g, 255 - this.b);
    }, eq(t) {
      return this.r === t.r && this.g === t.g && this.b === t.g;
    }, str() {
      return `(${this.r}, ${this.g}, ${this.b})`;
    } };
  }
  __name(N, "N");
  function ce(e, t, r, u) {
    return { x: e != null ? e : 0, y: t != null ? t : 0, w: r != null ? r : 1, h: u != null ? u : 1, scale(b) {
      return ce(this.x + this.w * b.x, this.y + this.h * b.y, this.w * b.w, this.h * b.h);
    }, clone() {
      return ce(this.x, this.y, this.w, this.h);
    }, eq(b) {
      return this.x === b.x && this.y === b.y && this.w === b.w && this.h === b.h;
    } };
  }
  __name(ce, "ce");
  function ue(e) {
    return { m: e ? [...e] : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], clone() {
      return ue(this.m);
    }, mult(t) {
      let r = [];
      for (let u = 0; u < 4; u++)
        for (let b = 0; b < 4; b++)
          r[u * 4 + b] = this.m[0 * 4 + b] * t.m[u * 4 + 0] + this.m[1 * 4 + b] * t.m[u * 4 + 1] + this.m[2 * 4 + b] * t.m[u * 4 + 2] + this.m[3 * 4 + b] * t.m[u * 4 + 3];
      return ue(r);
    }, multVec4(t) {
      return { x: t.x * this.m[0] + t.y * this.m[4] + t.z * this.m[8] + t.w * this.m[12], y: t.x * this.m[1] + t.y * this.m[5] + t.z * this.m[9] + t.w * this.m[13], z: t.x * this.m[2] + t.y * this.m[6] + t.z * this.m[10] + t.w * this.m[14], w: t.x * this.m[3] + t.y * this.m[7] + t.z * this.m[11] + t.w * this.m[15] };
    }, multVec3(t) {
      let r = this.multVec4({ x: t.x, y: t.y, z: t.z, w: 1 });
      return Ce(r.x, r.y, r.z);
    }, multVec2(t) {
      return a(t.x * this.m[0] + t.y * this.m[4] + 0 * this.m[8] + 1 * this.m[12], t.x * this.m[1] + t.y * this.m[5] + 0 * this.m[9] + 1 * this.m[13]);
    }, translate(t) {
      return this.mult(ue([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t.x, t.y, 0, 1]));
    }, scale(t) {
      return this.mult(ue([t.x, 0, 0, 0, 0, t.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
    }, rotateX(t) {
      return t = xe(-t), this.mult(ue([1, 0, 0, 0, 0, Math.cos(t), -Math.sin(t), 0, 0, Math.sin(t), Math.cos(t), 0, 0, 0, 0, 1]));
    }, rotateY(t) {
      return t = xe(-t), this.mult(ue([Math.cos(t), 0, Math.sin(t), 0, 0, 1, 0, 0, -Math.sin(t), 0, Math.cos(t), 0, 0, 0, 0, 1]));
    }, rotateZ(t) {
      return t = xe(-t), this.mult(ue([Math.cos(t), -Math.sin(t), 0, 0, Math.sin(t), Math.cos(t), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
    }, invert() {
      let t = [], r = this.m[10] * this.m[15] - this.m[14] * this.m[11], u = this.m[9] * this.m[15] - this.m[13] * this.m[11], b = this.m[9] * this.m[14] - this.m[13] * this.m[10], B = this.m[8] * this.m[15] - this.m[12] * this.m[11], v = this.m[8] * this.m[14] - this.m[12] * this.m[10], T = this.m[8] * this.m[13] - this.m[12] * this.m[9], D = this.m[6] * this.m[15] - this.m[14] * this.m[7], z = this.m[5] * this.m[15] - this.m[13] * this.m[7], W = this.m[5] * this.m[14] - this.m[13] * this.m[6], te = this.m[4] * this.m[15] - this.m[12] * this.m[7], Z = this.m[4] * this.m[14] - this.m[12] * this.m[6], oe = this.m[5] * this.m[15] - this.m[13] * this.m[7], j = this.m[4] * this.m[13] - this.m[12] * this.m[5], J = this.m[6] * this.m[11] - this.m[10] * this.m[7], K = this.m[5] * this.m[11] - this.m[9] * this.m[7], de = this.m[5] * this.m[10] - this.m[9] * this.m[6], m = this.m[4] * this.m[11] - this.m[8] * this.m[7], pe = this.m[4] * this.m[10] - this.m[8] * this.m[6], A = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      t[0] = this.m[5] * r - this.m[6] * u + this.m[7] * b, t[4] = -(this.m[4] * r - this.m[6] * B + this.m[7] * v), t[8] = this.m[4] * u - this.m[5] * B + this.m[7] * T, t[12] = -(this.m[4] * b - this.m[5] * v + this.m[6] * T), t[1] = -(this.m[1] * r - this.m[2] * u + this.m[3] * b), t[5] = this.m[0] * r - this.m[2] * B + this.m[3] * v, t[9] = -(this.m[0] * u - this.m[1] * B + this.m[3] * T), t[13] = this.m[0] * b - this.m[1] * v + this.m[2] * T, t[2] = this.m[1] * D - this.m[2] * z + this.m[3] * W, t[6] = -(this.m[0] * D - this.m[2] * te + this.m[3] * Z), t[10] = this.m[0] * oe - this.m[1] * te + this.m[3] * j, t[14] = -(this.m[0] * W - this.m[1] * Z + this.m[2] * j), t[3] = -(this.m[1] * J - this.m[2] * K + this.m[3] * de), t[7] = this.m[0] * J - this.m[2] * m + this.m[3] * pe, t[11] = -(this.m[0] * K - this.m[1] * m + this.m[3] * A), t[15] = this.m[0] * de - this.m[1] * pe + this.m[2] * A;
      let S = this.m[0] * t[0] + this.m[1] * t[4] + this.m[2] * t[8] + this.m[3] * t[12];
      for (let I = 0; I < 4; I++)
        for (let $ = 0; $ < 4; $++)
          t[I * 4 + $] *= 1 / S;
      return ue(t);
    } };
  }
  __name(ue, "ue");
  function Kt(e, t, r, u = Math.sin) {
    return e + (u(r) + 1) / 2 * (t - e);
  }
  __name(Kt, "Kt");
  function Ct(e) {
    return { seed: e, gen(...t) {
      if (t.length === 0)
        return this.seed = (Cn * this.seed + Pn) % er, this.seed / er;
      if (t.length === 1) {
        if (typeof t[0] == "number")
          return this.gen(0, t[0]);
        if (Le(t[0]))
          return this.gen(a(0, 0), t[0]);
        if (Xe(t[0]))
          return this.gen(N(0, 0, 0), t[0]);
      } else if (t.length === 2) {
        if (typeof t[0] == "number" && typeof t[1] == "number")
          return this.gen() * (t[1] - t[0]) + t[0];
        if (Le(t[0]) && Le(t[1]))
          return a(this.gen(t[0].x, t[1].x), this.gen(t[0].y, t[1].y));
        if (Xe(t[0]) && Xe(t[1]))
          return N(this.gen(t[0].r, t[1].r), this.gen(t[0].g, t[1].g), this.gen(t[0].b, t[1].b));
      }
    } };
  }
  __name(Ct, "Ct");
  function tr(e) {
    return e != null && (Bt.seed = e), Bt.seed;
  }
  __name(tr, "tr");
  function je(...e) {
    return Bt.gen(...e);
  }
  __name(je, "je");
  function Pt(...e) {
    return Math.floor(je(...e));
  }
  __name(Pt, "Pt");
  function rr(e) {
    return je() <= e;
  }
  __name(rr, "rr");
  function nr(e) {
    return e[Pt(e.length)];
  }
  __name(nr, "nr");
  function sr(e, t) {
    return e.p2.x >= t.p1.x && e.p1.x <= t.p2.x && e.p2.y >= t.p1.y && e.p1.y <= t.p2.y;
  }
  __name(sr, "sr");
  function St(e, t) {
    return e.p2.x > t.p1.x && e.p1.x < t.p2.x && e.p2.y > t.p1.y && e.p1.y < t.p2.y;
  }
  __name(St, "St");
  function Dt(e, t) {
    if (e.p1.x === e.p2.x && e.p1.y === e.p2.y || t.p1.x === t.p2.x && t.p1.y === t.p2.y)
      return null;
    let r = (t.p2.y - t.p1.y) * (e.p2.x - e.p1.x) - (t.p2.x - t.p1.x) * (e.p2.y - e.p1.y);
    if (r === 0)
      return null;
    let u = ((t.p2.x - t.p1.x) * (e.p1.y - t.p1.y) - (t.p2.y - t.p1.y) * (e.p1.x - t.p1.x)) / r, b = ((e.p2.x - e.p1.x) * (e.p1.y - t.p1.y) - (e.p2.y - e.p1.y) * (e.p1.x - t.p1.x)) / r;
    return u < 0 || u > 1 || b < 0 || b > 1 ? null : u;
  }
  __name(Dt, "Dt");
  function Pe(e, t) {
    let r = Dt(e, t);
    return r ? a(e.p1.x + r * (e.p2.x - e.p1.x), e.p1.y + r * (e.p2.y - e.p1.y)) : null;
  }
  __name(Pe, "Pe");
  function it(e, t) {
    return we(e, t.p1) || we(e, t.p2) ? true : !!Pe(t, ht(e.p1, a(e.p2.x, e.p1.y))) || !!Pe(t, ht(a(e.p2.x, e.p1.y), e.p2)) || !!Pe(t, ht(e.p2, a(e.p1.x, e.p2.y))) || !!Pe(t, ht(a(e.p1.x, e.p2.y), e.p1));
  }
  __name(it, "it");
  function we(e, t) {
    return t.x > e.p1.x && t.x < e.p2.x && t.y > e.p1.y && t.y < e.p2.y;
  }
  __name(we, "we");
  function ir(e, t) {
    return false;
  }
  __name(ir, "ir");
  function ot(e, t) {
    return ut(t, [e.p1, a(e.p2.x, e.p1.y), e.p2, a(e.p1.x, e.p2.y)]);
  }
  __name(ot, "ot");
  function or(e, t) {
    return false;
  }
  __name(or, "or");
  function ar(e, t) {
    return false;
  }
  __name(ar, "ar");
  function He(e, t) {
    if (We(t, e.p1) || We(t, e.p2))
      return true;
    for (let r = 0; r < t.length; r++) {
      let u = t[r], b = t[(r + 1) % t.length];
      if (Pe(e, { p1: u, p2: b }))
        return true;
    }
    return false;
  }
  __name(He, "He");
  function at(e, t) {
    return e.center.dist(t) < e.radius;
  }
  __name(at, "at");
  function Tt(e, t) {
    return e.center.dist(t.center) < e.radius + t.radius;
  }
  __name(Tt, "Tt");
  function ur(e, t) {
    return false;
  }
  __name(ur, "ur");
  function ut(e, t) {
    for (let r = 0; r < e.length; r++) {
      let u = { p1: e[r], p2: e[(r + 1) % e.length] };
      if (He(u, t))
        return true;
    }
    return false;
  }
  __name(ut, "ut");
  function We(e, t) {
    let r = false;
    for (let u = 0; u < e.length; u++) {
      let b = e[u], B = e[(u + 1) % e.length];
      (b.y > t.y && B.y < t.y || b.y < t.y && B.y > t.y) && t.x < (B.x - b.x) * (t.y - b.y) / (B.y - b.y) + b.x && (r = !r);
    }
    return r;
  }
  __name(We, "We");
  function Sn(e, t) {
    return e.eq(t);
  }
  __name(Sn, "Sn");
  function ct(e, t) {
    switch (e.shape) {
      case "rect":
        return St(t, e);
      case "line":
        return it(t, e);
      case "circle":
        return ir(t, e);
      case "polygon":
        return ot(t, e.pts);
      case "point":
        return we(t, e.pt);
    }
    throw new Error(`Unknown area shape: ${e.shape}`);
  }
  __name(ct, "ct");
  function At(e, t) {
    switch (e.shape) {
      case "rect":
        return it(e, t);
      case "line":
        return Boolean(Pe(e, t));
      case "circle":
        return ar(t, e);
      case "polygon":
        return He(t, e.pts);
      case "point":
        return or(t, e.pt);
    }
    throw new Error(`Unknown area shape: ${e.shape}`);
  }
  __name(At, "At");
  function Rt(e, t) {
    switch (e.shape) {
      case "rect":
        return ir(e, t);
      case "line":
        return ar(e, t);
      case "circle":
        return Tt(e, t);
      case "polygon":
        return ur(t, e.pts);
      case "point":
        return at(t, e.pt);
    }
    throw new Error(`Unknown area shape: ${e.shape}`);
  }
  __name(Rt, "Rt");
  function kt(e, t) {
    switch (e.shape) {
      case "rect":
        return ot(e, t);
      case "line":
        return He(e, t);
      case "circle":
        return ur(e, t);
      case "polygon":
        return ut(t, e.pts);
      case "point":
        return We(t, e.pt);
    }
    throw new Error(`Unknown area shape: ${e.shape}`);
  }
  __name(kt, "kt");
  function lt(e, t) {
    switch (e.shape) {
      case "rect":
        return we(e, t);
      case "line":
        return or(e, t);
      case "circle":
        return at(e, t);
      case "polygon":
        return We(e.pts, t);
      case "point":
        return Sn(e.pt, t);
    }
    throw new Error(`Unknown area shape: ${e.shape}`);
  }
  __name(lt, "lt");
  function Vt(e, t) {
    switch (t.shape) {
      case "rect":
        return ct(e, t);
      case "line":
        return At(e, t);
      case "circle":
        return Rt(e, t);
      case "polygon":
        return kt(e, t.pts);
      case "point":
        return lt(e, t.pt);
    }
    throw new Error(`Unknown area shape: ${t.shape}`);
  }
  __name(Vt, "Vt");
  function dt(e, t) {
    return { p1: a(e.p1.x - t.p2.x, e.p1.y - t.p2.y), p2: a(e.p2.x - t.p1.x, e.p2.y - t.p1.y) };
  }
  __name(dt, "dt");
  function ht(e, t) {
    return { p1: e.clone(), p2: t.clone() };
  }
  __name(ht, "ht");
  var Cn;
  var Pn;
  var er;
  var Bt;
  var _e = ae(() => {
    s(xe, "deg2rad");
    s(vt, "rad2deg");
    s(me, "clamp");
    s(Ne, "lerp");
    s(Ie, "map");
    s(jt, "mapc");
    s(a, "vec2");
    s(st, "dir");
    s(Ce, "vec3");
    s(Le, "isVec2");
    s(Ht, "isVec3");
    s(Xe, "isColor");
    s(Qt, "isMat4");
    s(N, "rgb");
    s(ce, "quad");
    s(ue, "mat4");
    s(Kt, "wave");
    Cn = 1103515245, Pn = 12345, er = 2147483648, Bt = Ct(Date.now());
    s(Ct, "rng");
    s(tr, "randSeed");
    s(je, "rand");
    s(Pt, "randi");
    s(rr, "chance");
    s(nr, "choose");
    s(sr, "testRectRect2");
    s(St, "testRectRect");
    s(Dt, "testLineLineT");
    s(Pe, "testLineLine");
    s(it, "testRectLine");
    s(we, "testRectPoint");
    s(ir, "testRectCircle");
    s(ot, "testRectPolygon");
    s(or, "testLinePoint");
    s(ar, "testLineCircle");
    s(He, "testLinePolygon");
    s(at, "testCirclePoint");
    s(Tt, "testCircleCircle");
    s(ur, "testCirclePolygon");
    s(ut, "testPolygonPolygon");
    s(We, "testPolygonPoint");
    s(Sn, "testPointPoint");
    s(ct, "testAreaRect");
    s(At, "testAreaLine");
    s(Rt, "testAreaCircle");
    s(kt, "testAreaPolygon");
    s(lt, "testAreaPoint");
    s(Vt, "testAreaArea");
    s(dt, "minkDiff");
    s(ht, "makeLine");
  });
  function Mt(e, t) {
    let r = typeof e, u = typeof t;
    if (r !== u)
      return false;
    if (r === "object" && u === "object") {
      let b = Object.keys(e), B = Object.keys(t);
      if (b.length !== B.length)
        return false;
      for (let v of b) {
        let T = e[v], D = t[v];
        if (!(typeof T == "function" && typeof D == "function") && !Mt(T, D))
          return false;
      }
      return true;
    }
    return e === t;
  }
  __name(Mt, "Mt");
  var le;
  var It = ae(() => {
    le = /* @__PURE__ */ __name(class extends Map {
      constructor(...t) {
        super(...t);
        Zt(this, "_lastID");
        this._lastID = 0;
      }
      push(t) {
        let r = this._lastID;
        return this.set(r, t), this._lastID++, r;
      }
      pushd(t) {
        let r = this.push(t);
        return () => this.delete(r);
      }
    }, "le");
    s(le, "IDList");
    s(Mt, "deepEq");
  });
  function qe(e) {
    switch (e) {
      case "topleft":
        return a(-1, -1);
      case "top":
        return a(0, -1);
      case "topright":
        return a(1, -1);
      case "left":
        return a(-1, 0);
      case "center":
        return a(0, 0);
      case "right":
        return a(1, 0);
      case "botleft":
        return a(-1, 1);
      case "bot":
        return a(0, 1);
      case "botright":
        return a(1, 1);
      default:
        return e;
    }
  }
  __name(qe, "qe");
  function lr(e, t) {
    let r = (() => {
      var C;
      let o = B(_t, Ft), h = b(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)), y = (C = t.background) != null ? C : N(0, 0, 0);
      e.clearColor(y.r / 255, y.g / 255, y.b / 255, 1), e.enable(e.BLEND), e.enable(e.SCISSOR_TEST), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
      let R = e.createBuffer();
      e.bindBuffer(e.ARRAY_BUFFER, R), e.bufferData(e.ARRAY_BUFFER, mt * 4, e.DYNAMIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, null);
      let x = e.createBuffer();
      e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, x), e.bufferData(e.ELEMENT_ARRAY_BUFFER, mt * 2, e.DYNAMIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null);
      let w = b(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2), { wrap: "repeat", filter: "nearest" });
      return { drawCalls: 0, lastDrawCalls: 0, defShader: o, curShader: o, defTex: h, curTex: h, curUniform: {}, vbuf: R, ibuf: x, vqueue: [], iqueue: [], transform: ue(), transformStack: [], background: y, bgTex: w, width: t.width, height: t.height };
    })();
    function u(o) {
      return Math.log(o) / Math.log(2) % 1 == 0;
    }
    __name(u, "u");
    s(u, "powerOfTwo");
    function b(o, h = {}) {
      let y = e.createTexture();
      e.bindTexture(e.TEXTURE_2D, y), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, o);
      let R = (() => {
        var w;
        switch ((w = h.filter) != null ? w : t.texFilter) {
          case "linear":
            return e.LINEAR;
          case "nearest":
            return e.NEAREST;
          default:
            return e.NEAREST;
        }
      })(), x = (() => {
        switch (h.wrap) {
          case "repeat":
            return e.REPEAT;
          case "clampToEdge":
            return e.CLAMP_TO_EDGE;
          default:
            return e.CLAMP_TO_EDGE;
        }
      })();
      return e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, R), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, R), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, x), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, x), e.bindTexture(e.TEXTURE_2D, null), { width: o.width, height: o.height, bind() {
        e.bindTexture(e.TEXTURE_2D, y);
      }, unbind() {
        e.bindTexture(e.TEXTURE_2D, null);
      } };
    }
    __name(b, "b");
    s(b, "makeTex");
    function B(o = _t, h = Ft) {
      let y, R = Dn.replace("{{user}}", o != null ? o : _t), x = Tn.replace("{{user}}", h != null ? h : Ft), w = e.createShader(e.VERTEX_SHADER), C = e.createShader(e.FRAGMENT_SHADER);
      if (e.shaderSource(w, R), e.shaderSource(C, x), e.compileShader(w), e.compileShader(C), y = e.getShaderInfoLog(w))
        throw new Error(y);
      if (y = e.getShaderInfoLog(C))
        throw new Error(y);
      let F = e.createProgram();
      if (e.attachShader(F, w), e.attachShader(F, C), e.bindAttribLocation(F, 0, "a_pos"), e.bindAttribLocation(F, 1, "a_uv"), e.bindAttribLocation(F, 2, "a_color"), e.linkProgram(F), (y = e.getProgramInfoLog(F)) && y !== `
`)
        throw new Error(y);
      return { bind() {
        e.useProgram(F);
      }, unbind() {
        e.useProgram(null);
      }, bindAttribs() {
        e.vertexAttribPointer(0, 3, e.FLOAT, false, Qe * 4, 0), e.enableVertexAttribArray(0), e.vertexAttribPointer(1, 2, e.FLOAT, false, Qe * 4, 12), e.enableVertexAttribArray(1), e.vertexAttribPointer(2, 4, e.FLOAT, false, Qe * 4, 20), e.enableVertexAttribArray(2);
      }, send(G) {
        this.bind();
        for (let se in G) {
          let O = G[se], re = e.getUniformLocation(F, se);
          typeof O == "number" ? e.uniform1f(re, O) : Qt(O) ? e.uniformMatrix4fv(re, false, new Float32Array(O.m)) : Xe(O) ? e.uniform4f(re, O.r, O.g, O.b, O.a) : Ht(O) ? e.uniform3f(re, O.x, O.y, O.z) : Le(O) && e.uniform2f(re, O.x, O.y);
        }
        this.unbind();
      } };
    }
    __name(B, "B");
    s(B, "makeShader");
    function v(o, h, y, R) {
      let x = o.width / h, w = o.height / y, C = 1 / x, F = 1 / w, G = {}, se = R.split("").entries();
      for (let [O, re] of se)
        G[re] = a(O % x * C, Math.floor(O / x) * F);
      return { tex: o, map: G, qw: C, qh: F };
    }
    __name(v, "v");
    s(v, "makeFont");
    function T(o, h, y = r.defTex, R = r.defShader, x = {}) {
      y = y != null ? y : r.defTex, R = R != null ? R : r.defShader, (y !== r.curTex || R !== r.curShader || !Mt(r.curUniform, x) || r.vqueue.length + o.length * Qe > mt || r.iqueue.length + h.length > mt) && D(), r.curTex = y, r.curShader = R, r.curUniform = x, h.forEach((w) => {
        r.iqueue.push(w + r.vqueue.length / Qe);
      }), o.forEach((w) => {
        let C = Z(r.transform.multVec2(w.pos.xy()));
        r.vqueue.push(C.x, C.y, w.pos.z, w.uv.x, w.uv.y, w.color.r / 255, w.color.g / 255, w.color.b / 255, w.opacity);
      });
    }
    __name(T, "T");
    s(T, "drawRaw");
    function D() {
      !r.curTex || !r.curShader || r.vqueue.length === 0 || r.iqueue.length === 0 || (r.curShader.send(r.curUniform), e.bindBuffer(e.ARRAY_BUFFER, r.vbuf), e.bufferSubData(e.ARRAY_BUFFER, 0, new Float32Array(r.vqueue)), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, r.ibuf), e.bufferSubData(e.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(r.iqueue)), r.curShader.bind(), r.curShader.bindAttribs(), r.curTex.bind(), e.drawElements(e.TRIANGLES, r.iqueue.length, e.UNSIGNED_SHORT, 0), r.curTex.unbind(), r.curShader.unbind(), e.bindBuffer(e.ARRAY_BUFFER, null), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null), r.iqueue = [], r.vqueue = [], r.drawCalls++);
    }
    __name(D, "D");
    s(D, "flush");
    function z() {
      e.clear(e.COLOR_BUFFER_BIT), t.background || S({ width: be(), height: ve(), quad: ce(0, 0, be() * Be() / cr, ve() * Be() / cr), tex: r.bgTex }), r.drawCalls = 0, r.transformStack = [], r.transform = ue();
    }
    __name(z, "z");
    s(z, "frameStart");
    function W() {
      D(), r.lastDrawCalls = r.drawCalls;
    }
    __name(W, "W");
    s(W, "frameEnd");
    function te() {
      return r.lastDrawCalls;
    }
    __name(te, "te");
    s(te, "drawCalls");
    function Z(o) {
      return a(o.x / be() * 2 - 1, -o.y / ve() * 2 + 1);
    }
    __name(Z, "Z");
    s(Z, "toNDC");
    function oe(o) {
      r.transform = o.clone();
    }
    __name(oe, "oe");
    s(oe, "applyMatrix");
    function j(...o) {
      if (o[0] === void 0)
        return;
      let h = a(...o);
      h.x === 0 && h.y === 0 || (r.transform = r.transform.translate(h));
    }
    __name(j, "j");
    s(j, "pushTranslate");
    function J(...o) {
      if (o[0] === void 0)
        return;
      let h = a(...o);
      h.x === 1 && h.y === 1 || (r.transform = r.transform.scale(h));
    }
    __name(J, "J");
    s(J, "pushScale");
    function K(o) {
      !o || (r.transform = r.transform.rotateX(o));
    }
    __name(K, "K");
    s(K, "pushRotateX");
    function de(o) {
      !o || (r.transform = r.transform.rotateY(o));
    }
    __name(de, "de");
    s(de, "pushRotateY");
    function m(o) {
      !o || (r.transform = r.transform.rotateZ(o));
    }
    __name(m, "m");
    s(m, "pushRotateZ");
    function pe() {
      r.transformStack.push(r.transform.clone());
    }
    __name(pe, "pe");
    s(pe, "pushTransform");
    function A() {
      r.transformStack.length > 0 && (r.transform = r.transformStack.pop());
    }
    __name(A, "A");
    s(A, "popTransform");
    function S(o) {
      var G;
      if (o.width === void 0 || o.height === void 0)
        throw new Error('drawUVQuad() requires property "width" and "height".');
      if (o.width <= 0 || o.height <= 0)
        return;
      let h = o.width, y = o.height, x = qe(o.origin || ft).scale(a(h, y).scale(-0.5)), w = o.quad || ce(0, 0, 1, 1), C = o.color || N(255, 255, 255), F = (G = o.opacity) != null ? G : 1;
      pe(), j(o.pos), m(o.angle), J(o.scale), j(x), T([{ pos: Ce(-h / 2, y / 2, 0), uv: a(o.flipX ? w.x + w.w : w.x, o.flipY ? w.y : w.y + w.h), color: C, opacity: F }, { pos: Ce(-h / 2, -y / 2, 0), uv: a(o.flipX ? w.x + w.w : w.x, o.flipY ? w.y + w.h : w.y), color: C, opacity: F }, { pos: Ce(h / 2, -y / 2, 0), uv: a(o.flipX ? w.x : w.x + w.w, o.flipY ? w.y + w.h : w.y), color: C, opacity: F }, { pos: Ce(h / 2, y / 2, 0), uv: a(o.flipX ? w.x : w.x + w.w, o.flipY ? w.y : w.y + w.h), color: C, opacity: F }], [0, 1, 3, 1, 2, 3], o.tex, o.shader, o.uniform), A();
    }
    __name(S, "S");
    s(S, "drawUVQuad");
    function I(o) {
      var w;
      if (!o.tex)
        throw new Error('drawTexture() requires property "tex".');
      let h = (w = o.quad) != null ? w : ce(0, 0, 1, 1), y = o.tex.width * h.w, R = o.tex.height * h.h, x = a(1);
      if (o.tiled) {
        let C = Math.ceil((o.width || y) / y), F = Math.ceil((o.height || R) / R), se = qe(o.origin || ft).add(a(1, 1)).scale(0.5).scale(C * y, F * R);
        for (let O = 0; O < C; O++)
          for (let re = 0; re < F; re++)
            S(ie(ne({}, o), { pos: (o.pos || a(0)).add(a(y * O, R * re)).sub(se), scale: x.scale(o.scale || a(1)), tex: o.tex, quad: h, width: y, height: R, origin: "topleft" }));
      } else
        o.width && o.height ? (x.x = o.width / y, x.y = o.height / R) : o.width ? (x.x = o.width / y, x.y = x.x) : o.height && (x.y = o.height / R, x.x = x.y), S(ie(ne({}, o), { scale: x.scale(o.scale || a(1)), tex: o.tex, quad: h, width: y, height: R }));
    }
    __name(I, "I");
    s(I, "drawTexture");
    function $(o, h, y, R, x, w = 1) {
      R = xe(R % 360), x = xe(x % 360), x <= R && (x += Math.PI * 2);
      let C = Math.ceil(Math.max(Math.sqrt(h + y) * 3 * (w || 1), 16)), F = (x - R) / C, G = [];
      for (let se = R; se < x; se += F)
        G.push(o.add(h * Math.cos(se), y * Math.sin(se)));
      return G.push(o.add(h * Math.cos(x), y * Math.sin(x))), G;
    }
    __name($, "$");
    s($, "getArcPts");
    function _(o) {
      if (o.width === void 0 || o.height === void 0)
        throw new Error('drawRect() requires property "width" and "height".');
      if (o.width <= 0 || o.height <= 0)
        return;
      let h = o.width, y = o.height, x = qe(o.origin || ft).add(1, 1).scale(a(h, y).scale(-0.5)), w = [a(0, 0), a(h, 0), a(h, y), a(0, y)];
      if (o.radius) {
        let C = Math.min(Math.min(h, y) / 2, o.radius);
        w = [a(C, 0), a(h - C, 0), ...$(a(h - C, C), C, C, 270, 360), a(h, C), a(h, y - C), ...$(a(h - C, y - C), C, C, 0, 90), a(h - C, y), a(C, y), ...$(a(C, y - C), C, C, 90, 180), a(0, y - C), a(0, C), ...$(a(C, C), C, C, 180, 270)];
      }
      E(ie(ne({}, o), { offset: x, pts: w }));
    }
    __name(_, "_");
    s(_, "drawRect");
    function L(o) {
      let { p1: h, p2: y } = o;
      if (!h || !y)
        throw new Error('drawLine() requires properties "p1" and "p2".');
      let R = o.width || 1, x = y.sub(h).unit().normal().scale(R * 0.5), w = [h.sub(x), h.add(x), y.add(x), y.sub(x)].map((C) => {
        var F, G;
        return { pos: Ce(C.x, C.y, 0), uv: a(0), color: (F = o.color) != null ? F : N(), opacity: (G = o.opacity) != null ? G : 1 };
      });
      T(w, [0, 1, 3, 1, 2, 3], r.defTex, o.shader, o.uniform);
    }
    __name(L, "L");
    s(L, "drawLine");
    function k(o) {
      let h = o.pts;
      if (!h)
        throw new Error('drawLines() requires property "pts".');
      if (!(h.length < 2))
        if (o.radius && h.length >= 3) {
          let y = h[0].dist(h[1]);
          for (let x = 1; x < h.length - 1; x++)
            y = Math.min(h[x].dist(h[x + 1]), y);
          let R = Math.min(o.radius, y / 2);
          L(ie(ne({}, o), { p1: h[0], p2: h[1] }));
          for (let x = 1; x < h.length - 2; x++) {
            let w = h[x], C = h[x + 1];
            L(ie(ne({}, o), { p1: w, p2: C }));
          }
          L(ie(ne({}, o), { p1: h[h.length - 2], p2: h[h.length - 1] }));
        } else
          for (let y = 0; y < h.length - 1; y++)
            L(ie(ne({}, o), { p1: h[y], p2: h[y + 1] }));
    }
    __name(k, "k");
    s(k, "drawLines");
    function X(o) {
      if (!o.p1 || !o.p2 || !o.p3)
        throw new Error('drawPolygon() requires properties "p1", "p2" and "p3".');
      return E(ie(ne({}, o), { pts: [o.p1, o.p2, o.p3] }));
    }
    __name(X, "X");
    s(X, "drawTriangle");
    function q(o) {
      if (!o.radius)
        throw new Error('drawCircle() requires property "radius".');
      o.radius !== 0 && M(ie(ne({}, o), { radiusX: o.radius, radiusY: o.radius, angle: 0 }));
    }
    __name(q, "q");
    s(q, "drawCircle");
    function M(o) {
      var h, y;
      if (o.radiusX === void 0 || o.radiusY === void 0)
        throw new Error('drawEllipse() requires properties "radiusX" and "radiusY".');
      o.radiusX === 0 || o.radiusY === 0 || E(ie(ne({}, o), { pts: $(a(0), o.radiusX, o.radiusY, (h = o.start) != null ? h : 0, (y = o.end) != null ? y : 360, o.resolution), radius: 0 }));
    }
    __name(M, "M");
    s(M, "drawEllipse");
    function E(o) {
      var y, R;
      if (!o.pts)
        throw new Error('drawPolygon() requires property "pts".');
      let h = o.pts.length;
      if (!(h < 3)) {
        if (pe(), j(o.pos), J(o.scale), m(o.angle), j(o.offset), o.fill !== false) {
          let x = (y = o.color) != null ? y : N(), w = o.pts.map((F) => {
            var G;
            return { pos: Ce(F.x, F.y, 0), uv: a(0, 0), color: x, opacity: (G = o.opacity) != null ? G : 1 };
          }), C = [...Array(h - 2).keys()].map((F) => [0, F + 1, F + 2]).flat();
          T(w, (R = o.indices) != null ? R : C, r.defTex, o.shader, o.uniform);
        }
        o.outline && k({ pts: [...o.pts, o.pts[0]], radius: o.radius, width: o.outline.width, color: o.outline.color }), A();
      }
    }
    __name(E, "E");
    s(E, "drawPolygon");
    function Y(o) {
      if (o.text === void 0)
        throw new Error('fmtText() requires property "text".');
      let h = o.font, y = (o.text + "").split(""), R = h.qw * h.tex.width, x = h.qh * h.tex.height, w = o.size || x, C = a(w / x).scale(a(o.scale || 1)), F = C.x * R, G = C.y * x, se = 0, O = G, re = 0, De = [], he = [], ye = null, fe = 0;
      for (; fe < y.length; ) {
        let Ue = y[fe];
        Ue === `
` ? (O += G, se = 0, ye = null, De.push(he), he = []) : (o.width ? se + F > o.width : false) && (O += G, se = 0, ye != null && (fe -= he.length - ye, Ue = y[fe], he = he.slice(0, ye)), ye = null, De.push(he), he = []), Ue !== `
` && (he.push(Ue), se += F, Ue === " " && (ye = he.length)), re = Math.max(re, se), fe++;
      }
      De.push(he), o.width && (re = o.width);
      let Oe = [], Te = a(o.pos || 0), Ae = qe(o.origin || ft).scale(0.5), Ke = -Ae.x * F - (Ae.x + 0.5) * (re - F), yt = -Ae.y * G - (Ae.y + 0.5) * (O - G);
      return De.forEach((Ue, bt) => {
        let et = (re - Ue.length * F) * (Ae.x + 0.5);
        Ue.forEach((Ye, tt) => {
          let Ge = h.map[Ye], Ut = tt * F, ze = bt * G;
          Ge && Oe.push({ tex: h.tex, quad: ce(Ge.x, Ge.y, h.qw, h.qh), ch: Ye, pos: a(Te.x + Ut + Ke + et, Te.y + ze + yt), opacity: o.opacity, color: o.color, origin: o.origin, scale: C });
        });
      }), { width: re, height: O, chars: Oe };
    }
    __name(Y, "Y");
    s(Y, "fmtText");
    function Ee(o) {
      Se(Y(o));
    }
    __name(Ee, "Ee");
    s(Ee, "drawText");
    function Se(o) {
      for (let h of o.chars)
        S({ tex: h.tex, width: h.tex.width * h.quad.w, height: h.tex.height * h.quad.h, pos: h.pos, scale: h.scale, color: h.color, opacity: h.opacity, quad: h.quad, origin: "center" });
    }
    __name(Se, "Se");
    s(Se, "drawFmtText");
    function $e() {
      if (t.width && t.height && t.stretch)
        if (t.letterbox) {
          let o = e.drawingBufferWidth / e.drawingBufferHeight, h = t.width / t.height;
          if (o > h) {
            r.width = t.height * o, r.height = t.height;
            let y = e.drawingBufferHeight * h, R = e.drawingBufferHeight, x = (e.drawingBufferWidth - y) / 2;
            e.scissor(x, 0, y, R), e.viewport(x, 0, e.drawingBufferWidth, e.drawingBufferHeight);
          } else {
            r.width = t.width, r.height = t.width / o;
            let y = e.drawingBufferWidth, R = e.drawingBufferWidth / h, x = (e.drawingBufferHeight - R) / 2;
            e.scissor(0, e.drawingBufferHeight - R - x, y, R), e.viewport(0, -x, e.drawingBufferWidth, e.drawingBufferHeight);
          }
        } else
          r.width = t.width, r.height = t.height, e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight);
      else
        r.width = e.drawingBufferWidth / Be(), r.height = e.drawingBufferHeight / Be(), e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight);
    }
    __name($e, "$e");
    s($e, "updateSize");
    function be() {
      return r.width;
    }
    __name(be, "be");
    s(be, "width");
    function ve() {
      return r.height;
    }
    __name(ve, "ve");
    s(ve, "height");
    function Be() {
      var o;
      return (o = t.scale) != null ? o : 1;
    }
    __name(Be, "Be");
    s(Be, "scale");
    function pt() {
      return r.background.clone();
    }
    __name(pt, "pt");
    return s(pt, "background"), $e(), z(), W(), { width: be, height: ve, scale: Be, makeTex: b, makeShader: B, makeFont: v, drawTexture: I, drawText: Ee, drawFmtText: Se, drawRect: _, drawLine: L, drawLines: k, drawTriangle: X, drawCircle: q, drawEllipse: M, drawPolygon: E, drawUVQuad: S, fmtText: Y, frameStart: z, frameEnd: W, pushTranslate: j, pushScale: J, pushRotateX: K, pushRotateY: de, pushRotateZ: m, pushTransform: pe, popTransform: A, applyMatrix: oe, drawCalls: te, background: pt };
  }
  __name(lr, "lr");
  var ft;
  var Qe;
  var mt;
  var cr;
  var Dn;
  var Tn;
  var _t;
  var Ft;
  var dr = ae(() => {
    _e();
    It();
    ft = "topleft", Qe = 9, mt = 65536, cr = 64, Dn = `
attribute vec3 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`, Tn = `
precision mediump float;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`, _t = `
vec4 vert(vec3 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`, Ft = `
vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
    s(qe, "originPt");
    s(lr, "gfxInit");
  });
  function hr(e) {
    return e === "pressed" || e === "rpressed" ? "down" : e === "released" ? "up" : e;
  }
  __name(hr, "hr");
  function An(e) {
    e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen();
  }
  __name(An, "An");
  function Rn() {
    document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
  }
  __name(Rn, "Rn");
  function kn() {
    return document.fullscreenElement || document.webkitFullscreenElement;
  }
  __name(kn, "kn");
  function fr(e = {}) {
    var X, q, M;
    let t = (X = e.root) != null ? X : document.body;
    t === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
    let r = { canvas: (q = e.canvas) != null ? q : (() => {
      let E = document.createElement("canvas");
      return t.appendChild(E), E;
    })(), keyStates: {}, charInputted: [], mouseMoved: false, keyPressed: false, keyPressedRep: false, mouseState: "up", mousePos: a(0, 0), mouseDeltaPos: a(0, 0), time: 0, realTime: 0, skipTime: false, dt: 0, scale: (M = e.scale) != null ? M : 1, isTouch: false, loopID: null, stopped: false, fps: 0, fpsBuf: [], fpsTimer: 0 }, u = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" }, b = ["space", "left", "right", "up", "down", "tab", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "s"];
    e.width && e.height && !e.stretch ? (r.canvas.width = e.width * r.scale, r.canvas.height = e.height * r.scale) : (r.canvas.width = r.canvas.parentElement.offsetWidth, r.canvas.height = r.canvas.parentElement.offsetHeight);
    let B = ["outline: none", "cursor: default"];
    e.crisp && (B.push("image-rendering: pixelated"), B.push("image-rendering: crisp-edges")), r.canvas.style = B.join(";"), r.canvas.setAttribute("tabindex", "0");
    let v = r.canvas.getContext("webgl", { antialias: true, depth: true, stencil: true, alpha: true, preserveDrawingBuffer: true });
    r.isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0, r.canvas.addEventListener("mousemove", (E) => {
      _() ? r.mousePos = a(E.offsetX, E.offsetY).scale(1 / r.scale) : r.mousePos = a(E.offsetX, E.offsetY).scale(1 / r.scale), r.mouseDeltaPos = a(E.movementX, E.movementY).scale(1 / r.scale), r.mouseMoved = true;
    }), r.canvas.addEventListener("mousedown", () => {
      r.mouseState = "pressed";
    }), r.canvas.addEventListener("mouseup", () => {
      r.mouseState = "released";
    }), r.canvas.addEventListener("keydown", (E) => {
      let Y = u[E.key] || E.key.toLowerCase();
      b.includes(Y) && E.preventDefault(), Y.length === 1 && r.charInputted.push(E.key), Y === "space" && r.charInputted.push(" "), E.repeat ? (r.keyPressedRep = true, r.keyStates[Y] = "rpressed") : (r.keyPressed = true, r.keyStates[Y] = "pressed");
    }), r.canvas.addEventListener("keyup", (E) => {
      let Y = u[E.key] || E.key.toLowerCase();
      r.keyStates[Y] = "released";
    }), r.canvas.addEventListener("touchstart", (E) => {
      if (!e.touchToMouse)
        return;
      E.preventDefault();
      let Y = E.touches[0];
      r.mousePos = a(Y.clientX, Y.clientY).scale(1 / r.scale), r.mouseState = "pressed";
    }), r.canvas.addEventListener("touchmove", (E) => {
      if (!e.touchToMouse)
        return;
      E.preventDefault();
      let Y = E.touches[0];
      r.mousePos = a(Y.clientX, Y.clientY).scale(1 / r.scale), r.mouseMoved = true;
    }), r.canvas.addEventListener("touchend", (E) => {
      !e.touchToMouse || (r.mouseState = "released");
    }), r.canvas.addEventListener("touchcancel", (E) => {
      !e.touchToMouse || (r.mouseState = "released");
    }), document.addEventListener("visibilitychange", () => {
      var E, Y;
      switch (document.visibilityState) {
        case "visible":
          r.skipTime = true, (E = e.audioCtx) == null || E.resume();
          break;
        case "hidden":
          (Y = e.audioCtx) == null || Y.suspend();
          break;
      }
    });
    function T() {
      return r.mousePos.clone();
    }
    __name(T, "T");
    s(T, "mousePos");
    function D() {
      return r.mouseDeltaPos.clone();
    }
    __name(D, "D");
    s(D, "mouseDeltaPos");
    function z() {
      return r.mouseState === "pressed";
    }
    __name(z, "z");
    s(z, "mouseClicked");
    function W() {
      return r.mouseState === "pressed" || r.mouseState === "down";
    }
    __name(W, "W");
    s(W, "mouseDown");
    function te() {
      return r.mouseState === "released";
    }
    __name(te, "te");
    s(te, "mouseReleased");
    function Z() {
      return r.mouseMoved;
    }
    __name(Z, "Z");
    s(Z, "mouseMoved");
    function oe(E) {
      return E === void 0 ? r.keyPressed : r.keyStates[E] === "pressed";
    }
    __name(oe, "oe");
    s(oe, "keyPressed");
    function j(E) {
      return E === void 0 ? r.keyPressedRep : r.keyStates[E] === "pressed" || r.keyStates[E] === "rpressed";
    }
    __name(j, "j");
    s(j, "keyPressedRep");
    function J(E) {
      return r.keyStates[E] === "pressed" || r.keyStates[E] === "rpressed" || r.keyStates[E] === "down";
    }
    __name(J, "J");
    s(J, "keyDown");
    function K(E) {
      return r.keyStates[E] === "released";
    }
    __name(K, "K");
    s(K, "keyReleased");
    function de() {
      return [...r.charInputted];
    }
    __name(de, "de");
    s(de, "charInputted");
    function m() {
      return r.dt;
    }
    __name(m, "m");
    s(m, "dt");
    function pe() {
      return r.time;
    }
    __name(pe, "pe");
    s(pe, "time");
    function A() {
      return r.fps;
    }
    __name(A, "A");
    s(A, "fps");
    function S() {
      return r.canvas.toDataURL();
    }
    __name(S, "S");
    s(S, "screenshot");
    function I(E) {
      return E && (r.canvas.style.cursor = E), r.canvas.style.cursor;
    }
    __name(I, "I");
    s(I, "cursor");
    function $(E = true) {
      E ? An(r.canvas) : Rn();
    }
    __name($, "$");
    s($, "fullscreen");
    function _() {
      return Boolean(kn());
    }
    __name(_, "_");
    s(_, "isFullscreen");
    function L(E) {
      let Y = s((Ee) => {
        if (document.visibilityState !== "visible") {
          r.loopID = requestAnimationFrame(Y);
          return;
        }
        let Se = Ee / 1e3, $e = Se - r.realTime;
        r.realTime = Se, r.skipTime || (r.dt = $e, r.time += r.dt, r.fpsBuf.push(1 / r.dt), r.fpsTimer += r.dt, r.fpsTimer >= 1 && (r.fpsTimer = 0, r.fps = Math.round(r.fpsBuf.reduce((be, ve) => be + ve) / r.fpsBuf.length), r.fpsBuf = [])), r.skipTime = false, E();
        for (let be in r.keyStates)
          r.keyStates[be] = hr(r.keyStates[be]);
        r.mouseState = hr(r.mouseState), r.charInputted = [], r.mouseMoved = false, r.keyPressed = false, r.keyPressedRep = false, r.loopID = requestAnimationFrame(Y);
      }, "frame");
      r.stopped = false, r.loopID = requestAnimationFrame(Y);
    }
    __name(L, "L");
    s(L, "run");
    function k() {
      cancelAnimationFrame(r.loopID), r.stopped = true;
    }
    __name(k, "k");
    return s(k, "quit"), { gl: v, mousePos: T, mouseDeltaPos: D, keyDown: J, keyPressed: oe, keyPressedRep: j, keyReleased: K, mouseDown: W, mouseClicked: z, mouseReleased: te, mouseMoved: Z, charInputted: de, cursor: I, dt: m, time: pe, fps: A, screenshot: S, run: L, quit: k, focused: () => document.activeElement === r.canvas, focus: () => r.canvas.focus(), canvas: r.canvas, isTouch: r.isTouch, scale: r.scale, fullscreen: $, isFullscreen: _ };
  }
  __name(fr, "fr");
  var mr = ae(() => {
    _e();
    s(hr, "processBtnState");
    s(An, "enterFullscreen");
    s(Rn, "exitFullscreen");
    s(kn, "getFullscreenElement");
    s(fr, "appInit");
  });
  var yr;
  var pr = ae(() => {
    yr = Nt("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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  });
  function gr() {
    let e = (() => {
      let B = new (window.AudioContext || window.webkitAudioContext)(), v = B.createGain(), T = v;
      return T.connect(B.destination), { ctx: B, gainNode: v, masterNode: T };
    })(), t = { buf: new AudioBuffer({ length: 1, numberOfChannels: 1, sampleRate: 44100 }) };
    e.ctx.decodeAudioData(yr.buffer.slice(0), (B) => {
      t.buf = B;
    }, () => {
      throw new Error("failed to make burp");
    });
    function r(B) {
      return B !== void 0 && (e.gainNode.gain.value = me(B, br, Ur)), e.gainNode.gain.value;
    }
    __name(r, "r");
    s(r, "volume");
    function u(B, v = { loop: false, volume: 1, speed: 1, detune: 0, seek: 0 }) {
      var j;
      let T = false, D = e.ctx.createBufferSource();
      D.buffer = B.buf, D.loop = !!v.loop;
      let z = e.ctx.createGain();
      D.connect(z), z.connect(e.masterNode);
      let W = (j = v.seek) != null ? j : 0;
      D.start(0, W);
      let te = e.ctx.currentTime - W, Z = null, oe = { stop() {
        T || (this.pause(), te = e.ctx.currentTime);
      }, play(J) {
        if (!T)
          return;
        let K = D;
        D = e.ctx.createBufferSource(), D.buffer = K.buffer, D.loop = K.loop, D.playbackRate.value = K.playbackRate.value, D.detune && (D.detune.value = K.detune.value), D.connect(z);
        let de = J != null ? J : this.time();
        D.start(0, de), te = e.ctx.currentTime - de, T = false, Z = null;
      }, pause() {
        T || (D.stop(), T = true, Z = e.ctx.currentTime);
      }, paused() {
        return T;
      }, stopped() {
        return T;
      }, speed(J) {
        return J !== void 0 && (D.playbackRate.value = me(J, Mn, In)), D.playbackRate.value;
      }, detune(J) {
        return D.detune ? (J !== void 0 && (D.detune.value = me(J, _n, Fn)), D.detune.value) : 0;
      }, volume(J) {
        return J !== void 0 && (z.gain.value = me(J, br, Ur)), z.gain.value;
      }, loop() {
        D.loop = true;
      }, unloop() {
        D.loop = false;
      }, duration() {
        return B.buf.duration;
      }, time() {
        return T ? Z - te : e.ctx.currentTime - te;
      } };
      return oe.speed(v.speed), oe.detune(v.detune), oe.volume(v.volume), oe;
    }
    __name(u, "u");
    s(u, "play");
    function b(B) {
      return u(t, B);
    }
    __name(b, "b");
    return s(b, "burp"), { ctx: e.ctx, volume: r, play: u, burp: b };
  }
  __name(gr, "gr");
  var br;
  var Ur;
  var Mn;
  var In;
  var _n;
  var Fn;
  var xr = ae(() => {
    _e();
    pr();
    br = 0, Ur = 3, Mn = 0, In = 3, _n = -1200, Fn = 1200;
    s(gr, "audioInit");
  });
  var Er;
  var wr = ae(() => {
    Er = "data:image/png;base64,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";
  });
  var Br;
  var vr = ae(() => {
    Br = "data:image/png;base64,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";
  });
  var Pr;
  var Cr = ae(() => {
    Pr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAACACAYAAAD03Gy6AAAAAXNSR0IArs4c6QAACldJREFUeJztXdt24zAItHPy/7/sfalyCJmBAcmJ0+28OMYIEFfF7W734ziODWDf9x3R//CM4T/kr+jZwF0R7oVE9H3f93H1shANyWH8V4Xfs3X8+IwSfd/3nQbAO1O5WkXIINWpET/LKiXbIkeodDUp/Fq27qYY642IospkoLXDqChT7H30ef8BWo+cOFClqy3bJ88BsG1JC2Jtxz5TgsBQCeS7ELVP5FQmBwUR8aUzgJWhN4aVXERHG2Z0L4vpVjfOgPijlhuBVayVG5YU62FRb2N9PurnFfmz6M6A6DOSH/E86VB72h80KE63eIuT1fnRpV8JrJLsc3t/Zy1DFe4VsDXWiShLPF39HM2MiH4V3LctL5so86JBgwax77eMXsFYV02md88qZOcdMbCS90YyR0ZrPRC/z2zE7/WitRk8L7IZ8fjqs/To8IIAj6GZ86rHsciQSttBG2MtSK0yJZkizLY4GAAli9V25el+XaVismz1vFnAPL3ieGRTBBZ4qVyqm7Wyun1dRXcInz0DlPb2CMDs4FLWecUr6VeEGgBJUERDn7M1mZ7jB4yPyUdljmiZre+ArHdFAA4HRUZkJHOqugdvS0XWClgd4evojlB0tYPOD8MIld5dtZPdXw4VA5UKUORXnbKiAnyVKjIr/Kqt7QWZQSg4kfNZMDs2Ip1RsmT6uji92piTs6Aw2qqsqmyc8VayfIUdrUVR1mbOR0Gr6GcBXpl1M4E8Pft/O85y4MsXHPTlQflmiAyMTjERf1V+Zj+zpYNhf4cH2lNpDcp9RFf6u0pnLSqjz2BlCxr34Q/lEbpvCBkNyUX01a8doixV6FnF+9c81H6fMZXMYVmeDVjFjkwH0hnpmamA1WufaCtbDHpelVcNQBZsFJwOOuuV5Cm3oCFEaTGZId03q+q6qGVELRHJ9y0la0HMTk8rnzoixUiOB9tE9z17Vw5DFmAlAbJkvPJr9I9itk11kGauj5g3Mss4xr+qwpB9mRwkK5KjnooiOcz+dIgxWsTToTP5Xb2ZvBV2Wh70WZF/QwLHvT3DVsvz7D53pny1T0cVoqJ9CrJGdJUzOVlL9M+qyZHZU9mTcmKK8AgA63OZ0pkMYOsieZUTFEJkL5srHahdI/yR5G5QNWBVVn4CnZbbxd0rU5yN+CM5arZmmV+xEw3CkUwz+1XXeJs7ev/wBoT/ClAZeFX+8cz32XGf0dm1IofZw/aUzUf2XMpydj5dRa/eZ3R2rdqT8Str2TNF5sCy3wvyeFePs9lbPb1U+asylWH+9A80xiJFiedfNWSi9qKsUeVUnF+1Jbr3uCtMkRIfcUQ/G8zRK5yfyZqF1IIUxUq/U1HZbLXk35kYCuirCLsZxSHVFtTlX5GJPkhDlt2vYsOMzkjPHz6B4wcK36yeij1KS1nxPDqmqr6ZQsUxZ+up6FjlmNlAdvH0NtT31qhHo37J+FlvRfwoI1GPZrYqejt7Y+u9LX5GqP5MYR1jBbESRnS7lvGjZ5mcaG2lBUWtJttf1z/yf1lm0flCMmiZoxVUT1AVucOuGZmVtel/WTY+s2fKekvrGto5+nVx1pcuhNL3APaM8URyOlnM+ikCqrQZx7K+rsqi/qka8kmsajtntK8/LEA0iFEbjoZ2tp7RTsHbFE0islM9HVladiI7juO4seOTp2XHLUtj6xBdNTq7VuQgO1fhOLT3VY/n3gi0Ae+4jB8py2jdAGQ01YaZQFTWeltv26a9iWT3/rQzm1X2tJBlkV9TGaiePzvmsmdVvX7NLRKeKffYDVaXdgRb9tYWlhAdp62084U4rsjQqPQRL6sA9CzjZ7Rqq0H7nLUn4mWAdqsCKoqugo6TzrRFoYXDLbqyZysNXsm/CpleVm0DLz8TZgN2XI8j/sUo1egrZOXZULKeDmGW0SwIFaM+MajfjWhv9hn9tRSU/WNxNwi+WioV1A1WtC77ohTxwYG66W9t6b67M0BRWHnG+M+mo2cd2xVs25tmQMZzpXaEbK3YV23Hp88AtcVcKQjvBH0VUZ0BTEHlhPSJb6efhvRHfCyiwKBrF98SjFk7aQCy9jLjaDuEvh2z+6ABiNpLZQCjtejzVYCSLtrnbAXIf8gNGVkNAhv2dj0LisJj6Qo/gw9C9n0BfbdR9Tz+gUbliLnK+WgT6olJ0Vnl7aybngGZ89kgVo6gA6t4rojooBJh8Nwy589WQMWx3xiEzmywz9oVkCn5XxAlDfLPyzz1wqrBiJT9oQF/vvfXP6zFf1cByjH3nUgHbOfIeQV0zv5oLdvzKv+EFcAUR5uIZJyRfatao3Ka69o5bETrn74JK5HsBGYFvnUGWbuRb1/+lOFMBazAtzq6i6+pgG8E8on3b/qD9pWDuDoDoi+BiIcN0kgH0rnqsKHsV/om/I2noAiHwQpZ7JnyTVh6F6R8D/gWjL0MzOxprJ2Rca84/zdVQIc3anHMPzbI1H+ZQSzSnr6qpFF7YC0j4/fPVtls5c60s6cZwJhYBXxzm1pRzSs6w10RwtrQt7apFUlik21m3y8zIFKmVsCVg7DatiVVf6UZUEWk85PtkPnK38uZy55/ugIeGwlsQ/wWLIu79LI/3lUB6OTA1mTPFT707ABQ9qbSFZsgQQ0Co88EKdtMZlfF0f5ZZGtEV/eJ1ljayzdhJiQqO3T1xrFyRLKjwdZNFGa3up4ljg9kdDqCPsgiF2WuCpRtXmaWKZk9mYPU7EZXJIfprfrt9HdBNuLeodngVAboALLPZ5+VEzlzJtnQUR3JfNy/owJWgTnumzF9XGTVkvGrcmftOwuXSIJOlai8qzK9IofZhuirbLsdAKoSdU5YmnL6YHqrLYjJzPo/OslE+5vBjQ2N8TlSWG0/TE+ELCuzdRG9Esyz2uEt2lhUetbZ6NSiZL0FOy38doT/RgzdVwat4syVDo+CniWBTx6bVCjpVqH8N2QU50bfejP5+w/8Z8UurwNVZtZyGc8Zzt+2YAZE9JUV0J0ZrN1VZCHdzJ6zZsBlz9lVrMjQytxi+lgyMN7WX1O1ilAmVtuGsoZVVcfp1QNC90CB1ns8/q8I30PtlR3d2IBia9BpSjHSbmp38LZX5TId6ppZPH4rYtvyk8/4bPnRaUHhGff2GsEHcXxWZgOrGs+LAhnZvwKt/7bSOtrSs0CqdKTXZr29j+xmAUZ6mWxW5avwdAqKsgk5Nyr/LEjsimRZeQdAZJ/P2iijET+z8WNgDmD0GR3jc8Yb3UdrUMKge4U/oke85VNQ1McRvQq2SS87q7AqVsnZti95neKz6iuMNlhh71MFoIxiWZbxW7rtq/Zq+aPyz+RnG2T8bG/Rns/AyyloRX9UedgAzk4gaHj6uZPZM046Sss7szpfXkcPKEc3z8dOC5XjYJWuVA8L8Hjmg2d5beUyvhmEb0OzMlQcGmUxuka6dwPEqwZYAdNflZMh/HlAZrjKYx2XZei495ma6bBXJLvqvCHL27I6CK3X0YjOeJTM9s+jvm/bgl2DKmMVzpK7bb/gdbTPVOUza1UIzPmrZsE/12kkANHzMcsAAAAASUVORK5CYII=";
  });
  var Dr;
  var Sr = ae(() => {
    Dr = "data:image/png;base64,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";
  });
  var Ar;
  var Tr = ae(() => {
    Ar = "data:image/png;base64,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";
  });
  function Xt(e) {
    let t = new Image();
    return t.src = e, t.crossOrigin = "anonymous", new Promise((r, u) => {
      t.onload = () => {
        r(t);
      }, t.onerror = () => {
        u(`failed to load ${e}`);
      };
    });
  }
  __name(Xt, "Xt");
  function kr(e) {
    return e.startsWith("data:");
  }
  __name(kr, "kr");
  function Vr(e, t, r = {}) {
    let u = { lastLoaderID: 0, loadRoot: "", loaders: {}, sprites: {}, sounds: {}, fonts: {}, shaders: {} };
    function b(A) {
      var I;
      let S = u.lastLoaderID;
      return u.loaders[S] = false, u.lastLoaderID++, A.catch((I = r.errHandler) != null ? I : console.error).finally(() => u.loaders[S] = true);
    }
    __name(b, "b");
    s(b, "load");
    function B() {
      let A = 0, S = 0;
      for (let I in u.loaders)
        A += 1, u.loaders[I] && (S += 1);
      return S / A;
    }
    __name(B, "B");
    s(B, "loadProgress");
    function v(A) {
      return A !== void 0 && (u.loadRoot = A), u.loadRoot;
    }
    __name(v, "v");
    s(v, "loadRoot");
    function T(A, S, I, $, _ = {}) {
      return b(new Promise((L, k) => {
        let X = kr(S) ? S : u.loadRoot + S;
        Xt(X).then((q) => {
          var E;
          let M = e.makeFont(e.makeTex(q, _), I, $, (E = _.chars) != null ? E : Lt);
          A && (u.fonts[A] = M), L(M);
        }).catch(k);
      }));
    }
    __name(T, "T");
    s(T, "loadFont");
    function D(A) {
      var S;
      return (S = u.sprites[A]) != null ? S : null;
    }
    __name(D, "D");
    s(D, "getSprite");
    function z(A) {
      var S;
      return (S = u.sounds[A]) != null ? S : null;
    }
    __name(z, "z");
    s(z, "getSound");
    function W(A) {
      var S;
      return (S = u.fonts[A]) != null ? S : null;
    }
    __name(W, "W");
    s(W, "getFont");
    function te(A) {
      var S;
      return (S = u.shaders[A]) != null ? S : null;
    }
    __name(te, "te");
    s(te, "getShader");
    function Z(A = 1, S = 1, I = 0, $ = 0, _ = 1, L = 1) {
      let k = [], X = _ / A, q = L / S;
      for (let M = 0; M < S; M++)
        for (let E = 0; E < A; E++)
          k.push(ce(I + E * X, $ + M * q, X, q));
      return k;
    }
    __name(Z, "Z");
    s(Z, "slice");
    function oe(A, S) {
      return b(typeof S == "string" ? fetch(v() + S).then((I) => I.json()).then((I) => oe(A, I)) : j(null, A).then((I) => {
        let $ = {}, _ = I.tex.width, L = I.tex.height;
        for (let k in S) {
          let X = S[k], q = { tex: I.tex, frames: Z(X.sliceX, X.sliceY, X.x / _, X.y / L, X.width / _, X.height / L), anims: X.anims };
          u.sprites[k] = q, $[k] = q;
        }
        return $;
      }));
    }
    __name(oe, "oe");
    s(oe, "loadSpriteAtlas");
    function j(A, S, I = { sliceX: 1, sliceY: 1, anims: {} }) {
      function $(_, L, k = { sliceX: 1, sliceY: 1, anims: {} }) {
        let X = e.makeTex(L, k), q = Z(k.sliceX || 1, k.sliceY || 1), M = { tex: X, frames: q, anims: k.anims || {} };
        return _ && (u.sprites[_] = M), M;
      }
      __name($, "$");
      return s($, "loadRawSprite"), b(new Promise((_, L) => {
        if (!S)
          return L(`expected sprite src for "${A}"`);
        if (typeof S == "string") {
          let k = kr(S) ? S : u.loadRoot + S;
          Xt(k).then((X) => _($(A, X, I))).catch(L);
        } else
          _($(A, S, I));
      }));
    }
    __name(j, "j");
    s(j, "loadSprite");
    function J(A, S) {
      return b(new Promise((I, $) => {
        fetch(v() + S).then((_) => _.json()).then((_) => Jt(this, null, function* () {
          let L = yield Promise.all(_.frames.map(Xt)), k = document.createElement("canvas");
          k.width = _.width, k.height = _.height * _.frames.length;
          let X = k.getContext("2d");
          return L.forEach((q, M) => {
            X.drawImage(q, 0, M * _.height);
          }), j(A, k, { sliceY: _.frames.length, anims: _.anims });
        })).then(I).catch($);
      }));
    }
    __name(J, "J");
    s(J, "loadPedit");
    function K(A, S, I) {
      return b(new Promise(($, _) => {
        let L = v() + I;
        j(A, S).then((k) => {
          fetch(L).then((X) => X.json()).then((X) => {
            let q = X.meta.size;
            k.frames = X.frames.map((M) => ce(M.frame.x / q.w, M.frame.y / q.h, M.frame.w / q.w, M.frame.h / q.h));
            for (let M of X.meta.frameTags)
              M.from === M.to ? k.anims[M.name] = M.from : k.anims[M.name] = { from: M.from, to: M.to, speed: 10, loop: true };
            $(k);
          }).catch(_);
        }).catch(_);
      }));
    }
    __name(K, "K");
    s(K, "loadAseprite");
    function de(A, S, I, $ = false) {
      function _(L, k, X) {
        let q = e.makeShader(k, X);
        return L && (u.shaders[L] = q), q;
      }
      __name(_, "_");
      return s(_, "loadRawShader"), b(new Promise((L, k) => {
        if (!S && !I)
          return k("no shader");
        function X(q) {
          return q ? fetch(u.loadRoot + q).then((M) => {
            if (M.ok)
              return M.text();
            throw new Error(`failed to load ${q}`);
          }).catch(k) : new Promise((M) => M(null));
        }
        __name(X, "X");
        if (s(X, "resolveUrl"), $)
          Promise.all([X(S), X(I)]).then(([q, M]) => {
            L(_(A, q, M));
          }).catch(k);
        else
          try {
            L(_(A, S, I));
          } catch (q) {
            k(q);
          }
      }));
    }
    __name(de, "de");
    s(de, "loadShader");
    function m(A, S) {
      let I = u.loadRoot + S;
      return b(new Promise(($, _) => {
        if (!S)
          return _(`expected sound src for "${A}"`);
        typeof S == "string" && fetch(I).then((L) => {
          if (L.ok)
            return L.arrayBuffer();
          throw new Error(`failed to load ${I}`);
        }).then((L) => new Promise((k, X) => {
          t.ctx.decodeAudioData(L, k, X);
        })).then((L) => {
          let k = { buf: L };
          A && (u.sounds[A] = k), $(k);
        }).catch(_);
      }));
    }
    __name(m, "m");
    s(m, "loadSound");
    function pe(A = "bean") {
      return j(A, Ar);
    }
    __name(pe, "pe");
    return s(pe, "loadBean"), T("apl386", Er, 45, 74), T("apl386o", Br, 45, 74), T("sink", Pr, 6, 8, { chars: "\u2588\u263A\u263B\u2665\u2666\u2663\u2660\u25CF\u25CB\u25AA\u25A1\u25A0\u25D8\u266A\u266B\u2261\u25BA\u25C4\u2302\xDE\xC0\xDF\xD7\xA5\u2191\u2193\u2192\u2190\u25CC\u25CF\u25BC\u25B2 !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u03A7\u2591\u2592\u2593\u1E00\u1E01\u1E02\u2502\u252C\u2524\u250C\u2510\u1E03\u1E04\u253C\u1E05\u1E06\u1E07\u1E08\u1E09\u1E0A\u1E0B\u1E0C\u2500\u251C\u2534\u2514\u2518\u1E0D\u1E0E\u205E\u1E0F\u1E10\u1E11\u1E12\u1E13\u1E14\u1E15\u1E16\u1E17\u1E18\u2584\u1E19\u1E1A\u1E1B\u1E1C\u2026\u1E1D\u1E1E\u1E1F\u1E20\u1E21\u1E22\u1E23\u1E24\u1E25\u1E26\u258C\u2590\u1E27\u1E28\u1E29\u1E2A\u1E2B\u1E2C\u1E2D\u1E2E\u1E2F\u1E30\u1E31\u1E32\u1E33\u1E34\u1E35\u1E36\u1E37\u1E38\u1E39\u1E3A\u1E3B\u1E3C\u1E3D\u1E3E\u1E3F\u1E40\u1E41\u1E42\u1E43\u1E44\u1E45\u1E46\u1E47\u1E48\u1E49\u1E4A\u1E4B\u1E4C\u1E4D\u1E4E\u1E4F\u1E50\u1E51\u1E52\u1E53\u1E54\u1E55\u1E56\u1E57\u1E58\u1E59\u1E5A\u1E5B\u1E5C\u1E5D\u1E5E\u1E5F\u1E60\u1E61\u1E62\u1E63\u1E64\u1E65\u1E66\u1E67\u1E68\u1E69\u1E6A\u1E6B\u1E6C\u1E6D\u1E6E\u1E6F\u1E70\u1E71\u1E72\u1E73\u1E74\u1E75\u1E76\u1E77\u1E78\u1E79\u1E7A\u1E7B\u1E7C" }), T("sinko", Dr, 8, 10), { loadRoot: v, loadSprite: j, loadSpriteAtlas: oe, loadPedit: J, loadAseprite: K, loadBean: pe, loadSound: m, loadFont: T, loadShader: de, loadProgress: B, load: b, sprites: u.sprites, fonts: u.fonts, sounds: u.sounds, shaders: u.shaders };
  }
  __name(Vr, "Vr");
  var Lt;
  var Rr;
  var Mr = ae(() => {
    _e();
    wr();
    vr();
    Cr();
    Sr();
    Tr();
    Lt = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~", Rr = " \u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0";
    s(Xt, "loadImg");
    s(kr, "isDataUrl");
    s(Vr, "assetsInit");
  });
  function Ir(e, t, r = {}) {
    var z;
    let u = [], b = (z = r.max) != null ? z : 1;
    function B() {
      u.length > b && (u = u.slice(0, b));
      let W = a(0, e.height());
      u.forEach((te, Z) => {
        let oe = Ie(Z, 0, b, 1, 0.5), j = Ie(Z, 0, b, 0.8, 0.2), J = (() => {
          switch (te.type) {
            case "info":
              return N(255, 255, 255);
            case "error":
              return N(255, 0, 127);
          }
        })(), K = e.fmtText({ text: te.msg, font: t.fonts.sink, pos: W, origin: "botleft", color: J, size: On / e.scale(), width: e.width(), opacity: oe });
        e.drawRect({ pos: W, width: K.width, height: K.height, origin: "botleft", color: N(0, 0, 0), opacity: j }), e.drawFmtText(K), W.y -= K.height;
      });
    }
    __name(B, "B");
    s(B, "draw");
    function v(W) {
      u.unshift({ type: "error", msg: W });
    }
    __name(v, "v");
    s(v, "error");
    function T(W) {
      u.unshift({ type: "info", msg: W });
    }
    __name(T, "T");
    s(T, "info");
    function D() {
      u = [];
    }
    __name(D, "D");
    return s(D, "clear"), { info: T, error: v, draw: B, clear: D };
  }
  __name(Ir, "Ir");
  var On;
  var _r = ae(() => {
    _e();
    On = 16;
    s(Ir, "loggerInit");
  });
  var Lr;
  var Fr = ae(() => {
    Lr = "data:image/png;base64,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";
  });
  var Wr;
  var Xr = ae(() => {
    Wr = "data:image/png;base64,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";
  });
  var qr;
  var $r = ae(() => {
    Fr();
    Xr();
    qr = s((e) => {
      function t(B = 2, v = 1) {
        let T = 0;
        return { id: "explode", require: ["scale"], update() {
          let D = Math.sin(T * B) * v;
          D < 0 && e.destroy(this), this.scale = e.vec2(D), T += e.dt();
        } };
      }
      __name(t, "t");
      s(t, "explode");
      let r = null, u = null;
      e.loadSprite(null, Lr).then((B) => r = B), e.loadSprite(null, Wr).then((B) => u = B);
      function b(B, v = {}) {
        var te, Z;
        let T = (v.speed || 1) * 5, D = v.scale || 1, z = e.add([e.pos(B), e.sprite(u), e.scale(0), e.stay(), e.origin("center"), t(T, D), ...((te = v.boomComps) != null ? te : () => [])()]), W = e.add([e.pos(B), e.sprite(r), e.scale(0), e.stay(), e.origin("center"), e.timer(0.4 / T, () => W.use(t(T, D))), ...((Z = v.kaComps) != null ? Z : () => [])()]);
        return { destroy() {
          e.destroy(W), e.destroy(z);
        } };
      }
      __name(b, "b");
      return s(b, "addKaboom"), { addKaboom: b };
    }, "default");
  });
  var zn = Bn((Is, Or) => {
    _e();
    dr();
    mr();
    xr();
    Mr();
    _r();
    It();
    $r();
    Or.exports = (e = {}) => {
      var $t;
      let t = gr(), r = fr({ width: e.width, height: e.height, scale: e.scale, crisp: e.crisp, canvas: e.canvas, root: e.root, stretch: e.stretch, touchToMouse: ($t = e.touchToMouse) != null ? $t : true, audioCtx: t.ctx }), u = lr(r.gl, { background: e.background ? N(e.background) : void 0, width: e.width, height: e.height, scale: e.scale, texFilter: e.texFilter, stretch: e.stretch, letterbox: e.letterbox }), { width: b, height: B } = u, v = Vr(u, t, { errHandler: (n) => {
        T.error(n);
      } }), T = Ir(u, v, { max: e.logMax }), D = "apl386o", z = "sink";
      function W() {
        return r.dt() * H.timeScale;
      }
      __name(W, "W");
      s(W, "dt");
      function te(n, i = {}) {
        let c = t.play({ buf: new AudioBuffer({ length: 1, numberOfChannels: 1, sampleRate: 44100 }) });
        return Je(() => {
          let d = v.sounds[n];
          if (!d)
            throw new Error(`sound not found: "${n}"`);
          let U = t.play(d, i);
          for (let l in U)
            c[l] = U[l];
        }), c;
      }
      __name(te, "te");
      s(te, "play");
      function Z() {
        return r.mousePos();
      }
      __name(Z, "Z");
      s(Z, "mousePos");
      function oe() {
        return m.camMousePos;
      }
      __name(oe, "oe");
      s(oe, "mouseWorldPos");
      function j(n) {
        var d, U;
        if (!n.sprite)
          throw new Error('drawSprite() requires property "sprite"');
        let i = (() => typeof n.sprite == "string" ? v.sprites[n.sprite] : n.sprite)();
        if (!i)
          throw new Error(`sprite not found: "${n.sprite}"`);
        let c = i.frames[(d = n.frame) != null ? d : 0];
        if (!c)
          throw new Error(`frame not found: ${(U = n.frame) != null ? U : 0}`);
        u.drawTexture(ie(ne({}, n), { tex: i.tex, quad: c.scale(n.quad || ce(0, 0, 1, 1)) }));
      }
      __name(j, "j");
      s(j, "drawSprite");
      function J(n) {
        var d;
        let i = (d = n.font) != null ? d : D, c = v.fonts[i];
        if (!c)
          throw new Error(`font not found: ${i}`);
        u.drawText(ie(ne({}, n), { font: c }));
      }
      __name(J, "J");
      s(J, "drawText");
      let K = 1600, de = "topleft", m = { loaded: false, events: {}, objEvents: {}, objs: new le(), timers: new le(), cam: { pos: xt(), scale: a(1), angle: 0, shake: 0 }, camMousePos: r.mousePos(), camMatrix: ue(), layers: {}, defLayer: null, gravity: K, on(n, i) {
        return this.events[n] || (this.events[n] = new le()), this.events[n].pushd(i);
      }, trigger(n, ...i) {
        this.events[n] && this.events[n].forEach((c) => c(...i));
      }, scenes: {}, paused: false };
      function pe(n, i) {
        n.forEach((c, d) => {
          m.layers[c] = d + 1;
        }), i && (m.defLayer = i);
      }
      __name(pe, "pe");
      s(pe, "layers");
      function A(...n) {
        return n.length > 0 && (m.cam.pos = a(...n)), m.cam.pos.clone();
      }
      __name(A, "A");
      s(A, "camPos");
      function S(...n) {
        return n.length > 0 && (m.cam.scale = a(...n)), m.cam.scale.clone();
      }
      __name(S, "S");
      s(S, "camScale");
      function I(n) {
        return n !== void 0 && (m.cam.angle = n), m.cam.angle;
      }
      __name(I, "I");
      s(I, "camRot");
      function $(n = 12) {
        m.cam.shake = n;
      }
      __name($, "$");
      s($, "shake");
      function _(n) {
        return m.camMatrix.multVec2(n);
      }
      __name(_, "_");
      s(_, "toScreen");
      function L(n) {
        return m.camMatrix.invert().multVec2(n);
      }
      __name(L, "L");
      s(L, "toWorld");
      let k = new Set(["id", "require"]), X = new Set(["add", "load", "update", "draw", "destroy", "inspect"]);
      function q(n) {
        let i = new Map(), c = {}, d = {}, U = { _id: null, hidden: false, paused: false, use(l) {
          if (!l)
            return;
          if (typeof l == "string")
            return this.use({ id: l });
          l.id && (this.unuse(l.id), i.set(l.id, {}));
          let f = l.id ? i.get(l.id) : c;
          f.cleanups = [];
          for (let p in l)
            if (!k.has(p)) {
              if (typeof l[p] == "function") {
                let V = l[p].bind(this);
                if (X.has(p)) {
                  f.cleanups.push(this.on(p, V)), f[p] = V;
                  continue;
                } else
                  f[p] = V;
              } else
                f[p] = l[p];
              this[p] === void 0 && Object.defineProperty(this, p, { get: () => f[p], set: (V) => f[p] = V, configurable: true, enumerable: true });
            }
          let g = s(() => {
            if (!!l.require) {
              for (let p of l.require)
                if (!this.c(p))
                  throw new Error(`comp '${l.id}' requires comp '${p}'`);
            }
          }, "checkDeps");
          this.exists() ? (l.add && l.add.call(this), l.load && Je(() => l.load.call(this)), g()) : l.require && f.cleanups.push(this.on("add", () => {
            g();
          }));
        }, unuse(l) {
          if (i.has(l)) {
            let f = i.get(l);
            f.cleanups.forEach((g) => g());
            for (let g in f)
              delete f[g];
          }
          i.delete(l);
        }, c(l) {
          return i.get(l);
        }, exists() {
          return this._id !== null;
        }, is(l) {
          if (l === "*")
            return true;
          if (Array.isArray(l)) {
            for (let f of l)
              if (!this.c(f))
                return false;
            return true;
          } else
            return this.c(l) != null;
        }, on(l, f) {
          return d[l] || (d[l] = new le()), d[l].pushd(f);
        }, action(l) {
          return this.on("update", l);
        }, trigger(l, ...f) {
          d[l] && d[l].forEach((p) => p.call(this, ...f));
          let g = m.objEvents[l];
          g && g.forEach((p) => {
            this.is(p.tag) && p.cb(this, ...f);
          });
        }, destroy() {
          !this.exists() || (this.trigger("destroy"), m.objs.delete(this._id), this._id = null);
        }, inspect() {
          let l = {};
          for (let [f, g] of i)
            l[f] = g.inspect ? g.inspect() : null;
          return l;
        } };
        for (let l of n)
          U.use(l);
        return U;
      }
      __name(q, "q");
      s(q, "make");
      function M(n) {
        let i = q(n);
        return i._id = m.objs.push(i), i.trigger("add"), Je(() => i.trigger("load")), i;
      }
      __name(M, "M");
      s(M, "add");
      function E(n) {
        if (!!n.exists())
          return m.objs.delete(n._id), n._id = m.objs.push(n), n;
      }
      __name(E, "E");
      s(E, "readd");
      function Y(n, i, c) {
        return m.objEvents[n] || (m.objEvents[n] = new le()), m.objEvents[n].pushd({ tag: i, cb: c });
      }
      __name(Y, "Y");
      s(Y, "on");
      function Ee(n, i) {
        if (typeof n == "function" && i === void 0)
          return M([{ update: n }]).destroy;
        if (typeof n == "string")
          return Y("update", n, i);
      }
      __name(Ee, "Ee");
      s(Ee, "action");
      function Se(n, i) {
        if (typeof n == "function" && i === void 0)
          return M([{ draw: n }]).destroy;
        if (typeof n == "string")
          return Y("draw", n, i);
      }
      __name(Se, "Se");
      s(Se, "render");
      function $e(n, i, c) {
        let d = Y("collide", n, (f, g, p) => g.is(i) && c(f, g)), U = Y("collide", i, (f, g, p) => g.is(n) && c(g, f)), l = Ee(n, (f) => {
          if (!f.area)
            throw new Error("collides() requires the object to have area() component");
          f._checkCollisions(i, (g) => {
            c(f, g);
          });
        });
        return () => [d, U, l].forEach((f) => f());
      }
      __name($e, "$e");
      s($e, "collides");
      function be(n, i) {
        return Ee(n, (c) => {
          c.isClicked() && i(c);
        });
      }
      __name(be, "be");
      s(be, "clicks");
      function ve(n, i, c) {
        return Ee(n, (d) => {
          d.isHovering() ? i(d) : c && c(d);
        });
      }
      __name(ve, "ve");
      s(ve, "hovers");
      function Be(n, i) {
        return new Promise((c) => {
          m.timers.push({ time: n, action: () => {
            i && i(), c();
          } });
        });
      }
      __name(Be, "Be");
      s(Be, "wait");
      function pt(n, i) {
        let c = false, d = s(() => {
          c || (i(), Be(n, d));
        }, "newF");
        return d(), () => c = true;
      }
      __name(pt, "pt");
      s(pt, "loop");
      function o(n, i) {
        if (Array.isArray(n)) {
          let c = n.map((d) => o(d, i));
          return () => c.forEach((d) => d());
        }
        return m.on("input", () => r.keyDown(n) && i());
      }
      __name(o, "o");
      s(o, "keyDown");
      function h(n, i) {
        if (Array.isArray(n)) {
          let c = n.map((d) => h(d, i));
          return () => c.forEach((d) => d());
        } else
          return typeof n == "function" ? m.on("input", () => r.keyPressed() && n()) : m.on("input", () => r.keyPressed(n) && i());
      }
      __name(h, "h");
      s(h, "keyPress");
      function y(n, i) {
        if (Array.isArray(n)) {
          let c = n.map((d) => y(d, i));
          return () => c.forEach((d) => d());
        } else
          return typeof n == "function" ? m.on("input", () => r.keyPressed() && n()) : m.on("input", () => r.keyPressedRep(n) && i());
      }
      __name(y, "y");
      s(y, "keyPressRep");
      function R(n, i) {
        if (Array.isArray(n)) {
          let c = n.map((d) => R(d, i));
          return () => c.forEach((d) => d());
        } else
          return typeof n == "function" ? m.on("input", () => r.keyPressed() && n()) : m.on("input", () => r.keyReleased(n) && i());
      }
      __name(R, "R");
      s(R, "keyRelease");
      function x(n) {
        return m.on("input", () => r.mouseDown() && n(Z()));
      }
      __name(x, "x");
      s(x, "mouseDown");
      function w(n) {
        return m.on("input", () => r.mouseClicked() && n(Z()));
      }
      __name(w, "w");
      s(w, "mouseClick");
      function C(n) {
        return m.on("input", () => r.mouseReleased() && n(Z()));
      }
      __name(C, "C");
      s(C, "mouseRelease");
      function F(n) {
        return m.on("input", () => r.mouseMoved() && n(Z(), r.mouseDeltaPos()));
      }
      __name(F, "F");
      s(F, "mouseMove");
      function G(n) {
        return m.on("input", () => r.charInputted().forEach((i) => n(i)));
      }
      __name(G, "G");
      s(G, "charInput"), r.canvas.addEventListener("touchstart", (n) => {
        [...n.changedTouches].forEach((i) => {
          m.trigger("touchStart", i.identifier, a(i.clientX, i.clientY).scale(1 / r.scale));
        });
      }), r.canvas.addEventListener("touchmove", (n) => {
        [...n.changedTouches].forEach((i) => {
          m.trigger("touchMove", i.identifier, a(i.clientX, i.clientY).scale(1 / r.scale));
        });
      }), r.canvas.addEventListener("touchmove", (n) => {
        [...n.changedTouches].forEach((i) => {
          m.trigger("touchEnd", i.identifier, a(i.clientX, i.clientY).scale(1 / r.scale));
        });
      });
      function se(n) {
        return m.on("touchStart", n);
      }
      __name(se, "se");
      s(se, "touchStart");
      function O(n) {
        return m.on("touchMove", n);
      }
      __name(O, "O");
      s(O, "touchMove");
      function re(n) {
        return m.on("touchEnd", n);
      }
      __name(re, "re");
      s(re, "touchEnd");
      function De() {
        h("f1", () => {
          H.inspect = !H.inspect;
        }), h("f2", () => {
          H.clearLog();
        }), h("f8", () => {
          H.paused = !H.paused, H.log(`${H.paused ? "paused" : "unpaused"}`);
        }), h("f7", () => {
          H.timeScale = me(H.timeScale - 0.2, 0, 2), H.log(`time scale: ${H.timeScale.toFixed(1)}`);
        }), h("f9", () => {
          H.timeScale = me(H.timeScale + 0.2, 0, 2), H.log(`time scale: ${H.timeScale.toFixed(1)}`);
        }), h("f10", () => {
          H.stepFrame(), H.log("stepped frame");
        });
      }
      __name(De, "De");
      s(De, "enterDebugMode");
      function he() {
        h("b", t.burp);
      }
      __name(he, "he");
      s(he, "enterBurpMode");
      function ye(n) {
        let i = [...m.objs.values()].sort((c, d) => {
          var f, g, p, V, P, Q;
          let U = (g = m.layers[(f = c.layer) != null ? f : m.defLayer]) != null ? g : 0, l = (V = m.layers[(p = d.layer) != null ? p : m.defLayer]) != null ? V : 0;
          return U == l ? ((P = c.z) != null ? P : 0) - ((Q = d.z) != null ? Q : 0) : U - l;
        });
        return n ? i.filter((c) => c.is(n)) : i;
      }
      __name(ye, "ye");
      s(ye, "get");
      function fe(n, i) {
        if (typeof n == "function" && i === void 0)
          return ye().forEach((c) => c.exists() && n(c));
        if (typeof n == "string")
          return ye(n).forEach((c) => c.exists() && i(c));
      }
      __name(fe, "fe");
      s(fe, "every");
      function Oe(n, i) {
        if (typeof n == "function" && i === void 0)
          return ye().reverse().forEach((c) => c.exists() && n(c));
        if (typeof n == "string")
          return ye(n).reverse().forEach((c) => c.exists() && i(c));
      }
      __name(Oe, "Oe");
      s(Oe, "revery");
      function Te(n) {
        n.destroy();
      }
      __name(Te, "Te");
      s(Te, "destroy");
      function Ae(n) {
        fe(n, Te);
      }
      __name(Ae, "Ae");
      s(Ae, "destroyAll");
      function Ke(n) {
        return n !== void 0 && (m.gravity = n), m.gravity;
      }
      __name(Ke, "Ke");
      s(Ke, "gravity");
      function yt(n, i) {
      }
      __name(yt, "yt");
      s(yt, "regCursor");
      function Ue(n) {
        m.trigger("next"), delete m.events.next, (n || !H.paused) && (m.timers.forEach((l, f) => {
          l.time -= W(), l.time <= 0 && (l.action(), m.timers.delete(f));
        }), Oe((l) => {
          l.paused || l.trigger("update", l);
        }));
        let c = a(b(), B()), d = m.cam, U = st(je(0, 360)).scale(d.shake);
        d.shake = Ne(d.shake, 0, 5 * W()), m.camMatrix = ue().translate(c.scale(0.5)).scale(d.scale).rotateZ(d.angle).translate(c.scale(-0.5)).translate(d.pos.scale(-1).add(c.scale(0.5)).add(U)), fe((l) => {
          l.hidden || (u.pushTransform(), l.fixed || u.applyMatrix(m.camMatrix), l.trigger("draw"), u.popTransform());
        });
      }
      __name(Ue, "Ue");
      s(Ue, "gameFrame");
      function bt() {
        var U;
        let n = null, i = v.fonts[z], c = N((U = e.inspectColor) != null ? U : [0, 0, 255]);
        function d(l, f) {
          let g = u.scale(), p = a(6).scale(1 / g), V = u.fmtText({ text: f, font: i, size: 16 / g, pos: l.add(a(p.x, p.y)), color: N(0, 0, 0) }), P = V.width + p.x * 2, Q = V.height + p.x * 2;
          u.pushTransform(), l.x + P >= b() && u.pushTranslate(a(-P, 0)), l.y + Q >= B() && u.pushTranslate(a(0, -Q)), u.drawRect({ pos: l, width: P, height: Q, color: N(255, 255, 255), outline: { width: 2 / g, color: N(0, 0, 0) } }), u.drawFmtText(V), u.popTransform();
        }
        __name(d, "d");
        if (s(d, "drawInspectTxt"), fe((l) => {
          if (!l.area || l.hidden)
            return;
          let f = u.scale() * (l.fixed ? 1 : (m.cam.scale.x + m.cam.scale.y) / 2);
          l.fixed || (u.pushTransform(), u.applyMatrix(m.camMatrix)), n || l.isHovering() && (n = l);
          let g = (n === l ? 8 : 4) / f, p = l.worldArea(), V = p.p2.x - p.p1.x, P = p.p2.y - p.p1.y;
          u.drawRect({ pos: p.p1, width: V, height: P, outline: { width: g, color: c }, fill: false }), l.fixed || u.popTransform();
        }), n) {
          let l = [], f = n.inspect();
          for (let g in f)
            f[g] ? l.push(`${g}: ${f[g]}`) : l.push(`${g}`);
          d(Z(), l.join(`
`));
        }
        d(a(0), `FPS: ${r.fps()}`);
      }
      __name(bt, "bt");
      s(bt, "drawInspect");
      function et(n, i) {
        return { target: n, displacement: i, isTop: () => i.y > 0, isBottom: () => i.y < 0, isLeft: () => i.x > 0, isRight: () => i.x < 0 };
      }
      __name(et, "et");
      s(et, "makeCollision");
      function Ye(...n) {
        return { id: "pos", pos: a(...n), moveBy(...i) {
          var f;
          let c = a(...i), d = c.x, U = c.y, l = null;
          if (this.solid && ((f = this.area) == null ? void 0 : f.shape) === "rect") {
            let g = this.worldArea();
            fe((p) => {
              var Yt;
              if (!this.exists() || p === this || !p.solid || ((Yt = p.area) == null ? void 0 : Yt.shape) !== "rect")
                return;
              let V = p.worldArea(), P = dt(V, g);
              if (we(P, a(0))) {
                let ge = Math.min(Math.abs(P.p1.x), Math.abs(P.p2.x), Math.abs(P.p1.y), Math.abs(P.p2.y)), Me = (() => {
                  switch (ge) {
                    case Math.abs(P.p1.x):
                      return a(ge, 0);
                    case Math.abs(P.p2.x):
                      return a(-ge, 0);
                    case Math.abs(P.p1.y):
                      return a(0, ge);
                    case Math.abs(P.p2.y):
                      return a(0, -ge);
                  }
                })();
                this.pos = this.pos.sub(Me), g = this.worldArea(), P = dt(V, g);
              }
              let Q = { p1: a(0), p2: a(d, U) }, ee = 1, Re = P.p1, ke = a(P.p1.x, P.p2.y), Ve = P.p2, rt = a(P.p2.x, P.p1.y), nt = 0, Ot = { right: { p1: Re, p2: ke }, top: { p1: ke, p2: Ve }, left: { p1: Ve, p2: rt }, bottom: { p1: rt, p2: Re } };
              for (let ge in Ot) {
                let Me = Ot[ge];
                if (d === 0 && Me.p1.x === 0 && Me.p2.x === 0 || U === 0 && Me.p1.y === 0 && Me.p2.y === 0) {
                  ee = 1;
                  break;
                }
                let wt = Dt(Q, Me);
                wt != null && (nt++, wt < ee && (ee = wt));
              }
              if (ee < 1 && !(ee === 0 && nt == 1 && !we(P, a(d, U)))) {
                let ge = a(-d * (1 - ee), -U * (1 - ee));
                d *= ee, U *= ee, l = et(p, ge);
              }
            });
          }
          return this.pos.x += d, this.pos.y += U, l && (this.trigger("collide", l.target, l), l.target.trigger("collide", this, et(this, l.displacement.scale(-1)))), l;
        }, move(...i) {
          return this.moveBy(a(...i).scale(W()));
        }, moveTo(...i) {
          if (typeof i[0] == "number" && typeof i[1] == "number")
            return this.moveTo(a(i[0], i[1]), i[2]);
          let c = i[0], d = i[1];
          if (d === void 0) {
            this.pos = a(c);
            return;
          }
          let U = c.sub(this.pos);
          if (U.len() <= d * W()) {
            this.pos = a(c);
            return;
          }
          this.move(U.unit().scale(d));
        }, screenPos() {
          return this.fixed ? this.pos : _(this.pos);
        }, inspect() {
          return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
        } };
      }
      __name(Ye, "Ye");
      s(Ye, "pos");
      function tt(...n) {
        return n.length === 0 ? tt(1) : { id: "scale", scale: a(...n), scaleTo(...i) {
          this.scale = a(...i);
        }, inspect() {
          return `(${ze(this.scale.x, 2)}, ${ze(this.scale.y, 2)})`;
        } };
      }
      __name(tt, "tt");
      s(tt, "scale");
      function Ge(n) {
        return { id: "rotate", angle: n != null ? n : 0, inspect() {
          return `${Math.round(this.angle)}`;
        } };
      }
      __name(Ge, "Ge");
      s(Ge, "rotate");
      function Ut(...n) {
        return { id: "color", color: N(...n), inspect() {
          return this.color.str();
        } };
      }
      __name(Ut, "Ut");
      s(Ut, "color");
      function ze(n, i) {
        return Number(n.toFixed(i));
      }
      __name(ze, "ze");
      s(ze, "toFixed");
      function Yr(n) {
        return { id: "opacity", opacity: n != null ? n : 1, inspect() {
          return `${ze(this.opacity, 2)}`;
        } };
      }
      __name(Yr, "Yr");
      s(Yr, "opacity");
      function Gr(n) {
        if (!n)
          throw new Error("please define an origin");
        return { id: "origin", origin: n, inspect() {
          return typeof this.origin == "string" ? this.origin : this.origin.str();
        } };
      }
      __name(Gr, "Gr");
      s(Gr, "origin");
      function zr(n) {
        return { id: "layer", layer: n, inspect() {
          var i;
          return (i = this.layer) != null ? i : m.defLayer;
        } };
      }
      __name(zr, "zr");
      s(zr, "layer");
      function Zr(n) {
        return { id: "z", z: n, inspect() {
          return `${this.z}`;
        } };
      }
      __name(Zr, "Zr");
      s(Zr, "z");
      function Jr(n, i) {
        return { id: "follow", require: ["pos"], follow: { obj: n, offset: i != null ? i : a(0) }, add() {
          n.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
        }, update() {
          n.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
        } };
      }
      __name(Jr, "Jr");
      s(Jr, "follow");
      function Nr(n, i) {
        let c = typeof n == "number" ? st(n) : n.unit();
        return { id: "move", require: ["pos"], update() {
          this.move(c.scale(i));
        } };
      }
      __name(Nr, "Nr");
      s(Nr, "move");
      function jr(n = 0) {
        let i = 0;
        return { id: "cleanup", require: ["pos", "area"], update() {
          let c = { p1: a(0, 0), p2: a(b(), B()) };
          ct(this.screenArea(), c) ? i = 0 : (i += W(), i >= n && this.destroy());
        } };
      }
      __name(jr, "jr");
      s(jr, "cleanup");
      function Hr(n = {}) {
        var c, d;
        let i = {};
        return { id: "area", add() {
          this.area.cursor && this.hovers(() => {
            r.cursor(this.area.cursor);
          });
        }, area: { shape: "rect", offset: (c = n.offset) != null ? c : a(0), width: n.width, height: n.height, scale: (d = n.scale) != null ? d : a(1), cursor: n.cursor }, isClicked() {
          return r.mouseClicked() && this.isHovering();
        }, isHovering() {
          let U = this.fixed ? Z() : oe();
          return r.isTouch ? r.mouseDown() && this.hasPoint(U) : this.hasPoint(U);
        }, isColliding(U) {
          if (!U.area || !U.exists())
            return false;
          let l = this.worldArea(), f = U.worldArea();
          return Vt(l, f);
        }, isTouching(U) {
          if (!U.area || !U.exists())
            return false;
          let l = this.worldArea(), f = U.worldArea();
          return sr(l, f);
        }, clicks(U) {
          return this.action(() => {
            this.isClicked() && U();
          });
        }, hovers(U, l) {
          return this.action(() => {
            this.isHovering() ? U() : l && l();
          });
        }, collides(U, l) {
          let f = this.action(() => this._checkCollisions(U, l)), g = this.on("collide", (p, V) => p.is(U) && l(p, V));
          return () => [f, g].forEach((p) => p());
        }, hasPoint(U) {
          return lt(this.worldArea(), U);
        }, pushOut(U) {
          var P;
          if (U === this || ((P = U.area) == null ? void 0 : P.shape) !== "rect")
            return null;
          let l = this.worldArea(), f = U.worldArea(), g = dt(l, f);
          if (!we(g, a(0)))
            return null;
          let p = Math.min(Math.abs(g.p1.x), Math.abs(g.p2.x), Math.abs(g.p1.y), Math.abs(g.p2.y)), V = (() => {
            switch (p) {
              case Math.abs(g.p1.x):
                return a(p, 0);
              case Math.abs(g.p2.x):
                return a(-p, 0);
              case Math.abs(g.p1.y):
                return a(0, p);
              case Math.abs(g.p2.y):
                return a(0, -p);
            }
          })();
          this.pos = this.pos.add(V);
        }, pushOutAll() {
          fe(this.pushOut);
        }, _checkCollisions(U) {
          fe(U, (l) => {
            this === l || !this.exists() || i[l._id] || this.isColliding(l) && (this.trigger("collide", l, null), i[l._id] = l);
          });
          for (let l in i) {
            let f = i[l];
            this.isColliding(f) || delete i[l];
          }
        }, worldArea() {
          var V, P, Q, ee;
          let U = (V = this.area.width) != null ? V : this.width, l = (P = this.area.height) != null ? P : this.height;
          if (U == null || l == null)
            throw new Error("failed to get area dimension");
          let f = ((Q = this.scale) != null ? Q : a(1)).scale(this.area.scale);
          U *= f.x, l *= f.y;
          let g = qe(this.origin || de), p = ((ee = this.pos) != null ? ee : a(0)).add(this.area.offset).sub(g.add(1, 1).scale(0.5).scale(U, l));
          return { shape: "rect", p1: p, p2: a(p.x + U, p.y + l) };
        }, screenArea() {
          let U = this.worldArea();
          return this.fixed ? U : { shape: "rect", p1: m.camMatrix.multVec2(U.p1), p2: m.camMatrix.multVec2(U.p2) };
        } };
      }
      __name(Hr, "Hr");
      s(Hr, "area");
      function Ze(n) {
        return { pos: n.pos, scale: n.scale, color: n.color, opacity: n.opacity, angle: n.angle, origin: n.origin, outline: n.outline, shader: v.shaders[n.shader], uniform: n.uniform };
      }
      __name(Ze, "Ze");
      s(Ze, "getRenderProps");
      function Qr(n, i = {}) {
        var l;
        let c = null, d = null;
        function U(f, g, p, V) {
          let P = a(1, 1);
          return p && V ? (P.x = p / (f.width * g.w), P.y = V / (f.height * g.h)) : p ? (P.x = p / (f.width * g.w), P.y = P.x) : V && (P.y = V / (f.height * g.h), P.x = P.y), P;
        }
        __name(U, "U");
        return s(U, "calcTexScale"), { id: "sprite", width: 0, height: 0, frame: i.frame || 0, quad: i.quad || ce(0, 0, 1, 1), animSpeed: (l = i.animSpeed) != null ? l : 1, load() {
          if (typeof n == "string" ? c = v.sprites[n] : c = n, !c)
            throw new Error(`sprite not found: "${n}"`);
          let f = ne({}, c.frames[0]);
          i.quad && (f = f.scale(i.quad));
          let g = U(c.tex, f, i.width, i.height);
          this.width = c.tex.width * f.w * g.x, this.height = c.tex.height * f.h * g.y, i.anim && this.play(i.anim);
        }, draw() {
          j(ie(ne({}, Ze(this)), { sprite: c, frame: this.frame, quad: this.quad, flipX: i.flipX, flipY: i.flipY, tiled: i.tiled, width: i.width, height: i.height }));
        }, update() {
          if (!d)
            return;
          let f = c.anims[d.name];
          if (typeof f == "number") {
            this.frame = f;
            return;
          }
          if (f.speed === 0)
            throw new Error("sprite anim speed cannot be 0");
          d.timer += W() * this.animSpeed, d.timer >= 1 / d.speed && (d.timer = 0, f.from > f.to ? (this.frame--, this.frame < f.to && (d.loop ? this.frame = f.from : (this.frame++, d.onEnd(), this.stop()))) : (this.frame++, this.frame > f.to && (d.loop ? this.frame = f.from : (this.frame--, d.onEnd(), this.stop()))));
        }, play(f, g = {}) {
          var V, P, Q, ee, Re, ke, Ve;
          if (!c) {
            Je(() => {
              this.play(f);
            });
            return;
          }
          let p = c.anims[f];
          if (p == null)
            throw new Error(`anim not found: ${f}`);
          d && this.stop(), d = { name: f, timer: 0, loop: (P = (V = g.loop) != null ? V : p.loop) != null ? P : false, pingpong: (ee = (Q = g.pingpong) != null ? Q : p.pingpong) != null ? ee : false, speed: (ke = (Re = g.speed) != null ? Re : p.speed) != null ? ke : 10, onEnd: (Ve = g.onEnd) != null ? Ve : () => {
          } }, typeof p == "number" ? this.frame = p : this.frame = p.from, this.trigger("animPlay", f);
        }, stop() {
          if (!d)
            return;
          let f = d.name;
          d = null, this.trigger("animEnd", f);
        }, numFrames() {
          return c ? c.frames.length : 0;
        }, curAnim() {
          return d == null ? void 0 : d.name;
        }, flipX(f) {
          i.flipX = f;
        }, flipY(f) {
          i.flipY = f;
        }, inspect() {
          let f = "";
          return typeof n == "string" ? f += JSON.stringify(n) : f += "[blob]", f;
        } };
      }
      __name(Qr, "Qr");
      s(Qr, "sprite");
      function Kr(n, i = {}) {
        function c() {
          var l, f, g, p;
          let d = v.fonts[(f = (l = this.font) != null ? l : e.font) != null ? f : D];
          if (!d)
            throw new Error(`font not found: "${d}"`);
          let U = u.fmtText(ie(ne({}, Ze(this)), { text: this.text + "", size: this.textSize, font: d, width: i.width }));
          return this.width = U.width / (((g = this.scale) == null ? void 0 : g.x) || 1), this.height = U.height / (((p = this.scale) == null ? void 0 : p.y) || 1), U;
        }
        __name(c, "c");
        return s(c, "update"), { id: "text", text: n, textSize: i.size, font: i.font, width: 0, height: 0, load() {
          c.call(this);
        }, draw() {
          u.drawFmtText(c.call(this));
        } };
      }
      __name(Kr, "Kr");
      s(Kr, "text");
      function en(n, i, c = {}) {
        return { id: "rect", width: n, height: i, radius: c.radius || 0, draw() {
          u.drawRect(ie(ne({}, Ze(this)), { width: this.width, height: this.height, radius: this.radius }));
        }, inspect() {
          return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
        } };
      }
      __name(en, "en");
      s(en, "rect");
      function tn(n, i) {
        return { id: "rect", width: n, height: i, draw() {
          u.drawUVQuad(ie(ne({}, Ze(this)), { width: this.width, height: this.height }));
        }, inspect() {
          return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
        } };
      }
      __name(tn, "tn");
      s(tn, "uvquad");
      function rn(n) {
        return { id: "circle", radius: n, draw() {
          u.drawCircle(ie(ne({}, Ze(this)), { radius: this.radius }));
        }, inspect() {
          return `${Math.ceil(this.radius)}`;
        } };
      }
      __name(rn, "rn");
      s(rn, "circle");
      function nn(n = 1, i = N(0, 0, 0)) {
        return { id: "outline", outline: { width: n, color: i } };
      }
      __name(nn, "nn");
      s(nn, "outline");
      function sn(n, i) {
        let c = new le();
        return n && i && c.pushd({ time: n, action: i }), { id: "timer", wait(d, U) {
          return c.pushd({ time: d, action: U });
        }, update() {
          c.forEach((d, U) => {
            d.time -= W(), d.time <= 0 && (d.action.call(this), c.delete(U));
          });
        } };
      }
      __name(sn, "sn");
      s(sn, "timer");
      let on = 640, an = 65536;
      function un(n = {}) {
        var l, f, g;
        let i = 0, c = null, d = null, U = true;
        return { id: "body", require: ["pos", "area"], jumpForce: (l = n.jumpForce) != null ? l : on, weight: (f = n.weight) != null ? f : 1, solid: (g = n.solid) != null ? g : true, update() {
          var V;
          let p = false;
          if (c) {
            let P = this.worldArea(), Q = c.worldArea(), ee = P.p2.y, Re = Q.p1.y, ke = P.p1.x, Ve = P.p2.x, rt = Q.p1.x, nt = Q.p2.x;
            !c.exists() || ee !== Re || Ve < rt || ke > nt ? (this.trigger("fall", c), c = null, d = null, p = true) : d && c.pos && (this.pos = this.pos.add(c.pos.sub(d)), d = c.pos.clone());
          }
          if (!c) {
            let P = this.move(0, i);
            if (P)
              if (P.isBottom()) {
                c = P.target;
                let Q = i;
                i = 0, c.pos && (d = c.pos.clone()), p || (this.trigger("ground", c), U = true);
              } else
                P.isTop() && (i = 0, this.trigger("headbutt", P.target));
            i += Ke() * this.weight * W(), i = Math.min(i, (V = n.maxVel) != null ? V : an);
          }
        }, curPlatform() {
          return c;
        }, grounded() {
          return c !== null;
        }, falling() {
          return i > 0;
        }, jump(p) {
          c = null, d = null, i = -p || -this.jumpForce;
        }, doubleJump(p) {
          this.grounded() ? this.jump(p) : U && (U = false, this.jump(p), this.trigger("doubleJump"));
        } };
      }
      __name(un, "un");
      s(un, "body");
      function cn(n, i = {}) {
        let c = v.shaders[n];
        return { id: "shader", shader: n, uniform: i };
      }
      __name(cn, "cn");
      s(cn, "shader");
      function ln() {
        return { id: "solid", require: ["area"], solid: true };
      }
      __name(ln, "ln");
      s(ln, "solid");
      function dn() {
        return { id: "fixed", fixed: true };
      }
      __name(dn, "dn");
      s(dn, "fixed");
      function hn() {
        return { id: "stay", stay: true };
      }
      __name(hn, "hn");
      s(hn, "stay");
      function fn(n) {
        if (n == null)
          throw new Error("health() requires the initial amount of hp");
        return { id: "health", hurt(i = 1) {
          this.setHP(n - i), this.trigger("hurt");
        }, heal(i = 1) {
          this.setHP(n + i), this.trigger("heal");
        }, hp() {
          return n;
        }, setHP(i) {
          n = i, n <= 0 && this.trigger("death");
        }, inspect() {
          return `${n}`;
        } };
      }
      __name(fn, "fn");
      s(fn, "health");
      function mn(n, i = {}) {
        var l;
        if (n == null)
          throw new Error("lifespan() requires time");
        let c = 0, d = (l = i.fade) != null ? l : 0, U = Math.max(n - d, 0);
        return { id: "lifespan", update() {
          c += W(), c >= U && (this.opacity = Ie(c, U, n, 1, 0)), c >= n && this.destroy();
        } };
      }
      __name(mn, "mn");
      s(mn, "lifespan");
      let H = { inspect: false, timeScale: 1, showLog: true, fps: r.fps, objCount() {
        return m.objs.size;
      }, stepFrame() {
        Ue(true);
      }, drawCalls: u.drawCalls, clearLog: T.clear, log: (n) => T.info(`[${r.time().toFixed(2)}] ${n}`), error: (n) => T.error(`[${r.time().toFixed(2)}] ${n}`), get paused() {
        return m.paused;
      }, set paused(n) {
        m.paused = n, n ? t.ctx.suspend() : t.ctx.resume();
      } };
      function Je(n) {
        m.loaded ? n() : m.on("load", n);
      }
      __name(Je, "Je");
      s(Je, "ready");
      function pn(n, i) {
        m.scenes[n] = i;
      }
      __name(pn, "pn");
      s(pn, "scene");
      function yn(n, ...i) {
        if (!m.scenes[n])
          throw new Error(`scene not found: ${n}`);
        m.on("next", () => {
          m.events = {}, m.objEvents = { add: new le(), update: new le(), draw: new le(), destroy: new le() }, m.objs.forEach((c) => {
            c.stay || Te(c);
          }), m.timers = new le(), m.cam = { pos: xt(), scale: a(1, 1), angle: 0, shake: 0 }, m.camMousePos = r.mousePos(), m.camMatrix = ue(), m.layers = {}, m.defLayer = null, m.gravity = K, m.scenes[n](...i), e.debug !== false && De(), e.burp && he();
        });
      }
      __name(yn, "yn");
      s(yn, "go");
      function bn(n, i) {
        try {
          return JSON.parse(window.localStorage[n]);
        } catch (c) {
          return i ? (Wt(n, i), i) : null;
        }
      }
      __name(bn, "bn");
      s(bn, "getData");
      function Wt(n, i) {
        window.localStorage[n] = JSON.stringify(i);
      }
      __name(Wt, "Wt");
      s(Wt, "setData");
      function gt(n) {
        let i = n(Fe);
        for (let c in i)
          Fe[c] = i[c], e.global !== false && (window[c] = i[c]);
        return Fe;
      }
      __name(gt, "gt");
      s(gt, "plug");
      function xt() {
        return a(b() / 2, B() / 2);
      }
      __name(xt, "xt");
      s(xt, "center");
      function Un(n, i) {
        return { id: "grid", gridPos: i.clone(), setGridPos(...c) {
          let d = a(...c);
          this.gridPos = d.clone(), this.pos = a(n.offset().x + this.gridPos.x * n.gridWidth(), n.offset().y + this.gridPos.y * n.gridHeight());
        }, moveLeft() {
          this.setGridPos(this.gridPos.add(a(-1, 0)));
        }, moveRight() {
          this.setGridPos(this.gridPos.add(a(1, 0)));
        }, moveUp() {
          this.setGridPos(this.gridPos.add(a(0, -1)));
        }, moveDown() {
          this.setGridPos(this.gridPos.add(a(0, 1)));
        } };
      }
      __name(Un, "Un");
      s(Un, "grid");
      function gn(n, i) {
        if (!i.width || !i.height)
          throw new Error("Must provide level grid width & height.");
        let c = [], d = a(i.pos || a(0)), U = 0, l = { offset() {
          return d.clone();
        }, gridWidth() {
          return i.width;
        }, gridHeight() {
          return i.height;
        }, getPos(...f) {
          let g = a(...f);
          return a(d.x + g.x * i.width, d.y + g.y * i.height);
        }, spawn(f, ...g) {
          let p = a(...g), V = (() => {
            if (i[f]) {
              if (typeof i[f] != "function")
                throw new Error("level symbol def must be a function returning a component list");
              return i[f](p);
            } else if (i.any)
              return i.any(f, p);
          })();
          if (!V)
            return;
          let P = a(d.x + p.x * i.width, d.y + p.y * i.height);
          for (let ee of V)
            if (ee.id === "pos") {
              P.x += ee.pos.x, P.y += ee.pos.y;
              break;
            }
          V.push(Ye(P)), V.push(Un(this, p));
          let Q = M(V);
          return c.push(Q), Q;
        }, width() {
          return U * i.width;
        }, height() {
          return n.length * i.height;
        }, destroy() {
          for (let f of c)
            Te(f);
        } };
        return n.forEach((f, g) => {
          let p = f.split("");
          U = Math.max(p.length, U), p.forEach((V, P) => {
            l.spawn(V, a(P, g));
          });
        }), l;
      }
      __name(gn, "gn");
      s(gn, "addLevel");
      let Fe = { loadRoot: v.loadRoot, loadSprite: v.loadSprite, loadSpriteAtlas: v.loadSpriteAtlas, loadSound: v.loadSound, loadFont: v.loadFont, loadShader: v.loadShader, loadAseprite: v.loadAseprite, loadPedit: v.loadPedit, loadBean: v.loadBean, load: v.load, width: b, height: B, center: xt, dt: W, time: r.time, screenshot: r.screenshot, focused: r.focused, focus: r.focus, cursor: r.cursor, regCursor: yt, fullscreen: r.fullscreen, isFullscreen: r.isFullscreen, ready: Je, isTouch: () => r.isTouch, layers: pe, camPos: A, camScale: S, camRot: I, shake: $, toScreen: _, toWorld: L, gravity: Ke, add: M, readd: E, destroy: Te, destroyAll: Ae, get: ye, every: fe, revery: Oe, pos: Ye, scale: tt, rotate: Ge, color: Ut, opacity: Yr, origin: Gr, layer: zr, area: Hr, sprite: Qr, text: Kr, rect: en, circle: rn, uvquad: tn, outline: nn, body: un, shader: cn, timer: sn, solid: ln, fixed: dn, stay: hn, health: fn, lifespan: mn, z: Zr, move: Nr, cleanup: jr, follow: Jr, on: Y, action: Ee, render: Se, collides: $e, clicks: be, hovers: ve, keyDown: o, keyPress: h, keyPressRep: y, keyRelease: R, mouseDown: x, mouseClick: w, mouseRelease: C, mouseMove: F, charInput: G, touchStart: se, touchMove: O, touchEnd: re, mousePos: Z, mouseWorldPos: oe, mouseDeltaPos: r.mouseDeltaPos, keyIsDown: r.keyDown, keyIsPressed: r.keyPressed, keyIsPressedRep: r.keyPressedRep, keyIsReleased: r.keyReleased, mouseIsDown: r.mouseDown, mouseIsClicked: r.mouseClicked, mouseIsReleased: r.mouseReleased, mouseIsMoved: r.mouseMoved, loop: pt, wait: Be, play: te, volume: t.volume, burp: t.burp, audioCtx: t.ctx, rng: Ct, rand: je, randi: Pt, randSeed: tr, vec2: a, dir: st, rgb: N, quad: ce, choose: nr, chance: rr, lerp: Ne, map: Ie, mapc: jt, wave: Kt, deg2rad: xe, rad2deg: vt, testAreaRect: ct, testAreaLine: At, testAreaCircle: Rt, testAreaPolygon: kt, testAreaPoint: lt, testAreaArea: Vt, testLineLine: Pe, testRectRect: St, testRectLine: it, testRectPoint: we, testPolygonPoint: We, testLinePolygon: He, testPolygonPolygon: ut, testCircleCircle: Tt, testCirclePoint: at, testRectPolygon: ot, drawSprite: j, drawText: J, drawRect: u.drawRect, drawLine: u.drawLine, drawLines: u.drawLines, drawTriangle: u.drawTriangle, drawCircle: u.drawCircle, drawEllipse: u.drawEllipse, drawUVQuad: u.drawUVQuad, drawPolygon: u.drawPolygon, pushTransform: u.pushTransform, popTransform: u.popTransform, pushTranslate: u.pushTranslate, pushRotate: u.pushRotateZ, pushScale: u.pushScale, debug: H, scene: pn, go: yn, addLevel: gn, getData: bn, setData: Wt, plug: gt, ASCII_CHARS: Lt, CP437_CHARS: Rr, LEFT: a(-1, 0), RIGHT: a(1, 0), UP: a(0, -1), DOWN: a(0, 1), canvas: r.canvas };
      if (gt(qr), e.plugins && e.plugins.forEach(gt), e.global !== false)
        for (let n in Fe)
          window[n] = Fe[n];
      let qt = 0;
      function Zn() {
        return qt;
      }
      __name(Zn, "Zn");
      return s(Zn, "frames"), r.run(() => {
        if (qt++, u.frameStart(), m.loaded)
          m.camMousePos = m.camMatrix.invert().multVec2(r.mousePos()), m.trigger("input"), Ue(), H.inspect && bt(), H.showLog && T.draw();
        else {
          let n = v.loadProgress();
          if (n === 1)
            m.loaded = true, m.trigger("load");
          else {
            let i = b() / 2, c = 24 / u.scale(), d = a(b() / 2, B() / 2).sub(a(i / 2, c / 2));
            u.drawRect({ pos: a(0), width: b(), height: B(), color: N(0, 0, 0) }), u.drawRect({ pos: d, width: i, height: c, fill: false, outline: { width: 4 / u.scale() } }), u.drawRect({ pos: d, width: i * n, height: c });
          }
        }
        u.frameEnd();
      }), e.debug !== false && De(), e.burp && he(), window.addEventListener("error", (n) => {
        T.error(`Error: ${n.error.message}`), r.quit(), r.run(() => {
          v.loadProgress() === 1 && (u.frameStart(), T.draw(), u.frameEnd());
        });
      }), Fe;
    };
  });
  var kaboom_default = zn();

  // code/main.js
  kaboom_default({
    background: [134, 135, 247],
    width: 320,
    height: 240,
    scale: 2
  });
  loadRoot("sprites/");
  loadAseprite("mario", "Mario.png", "Mario.json");
  loadAseprite("enemies", "enemies.png", "enemies.json");
  loadSprite("ground", "ground.png");
  loadSprite("questionBox", "questionBox.png");
  loadSprite("emptyBox", "emptyBox.png");
  loadSprite("brick", "brick.png");
  loadSprite("coin", "coin.png");
  loadSprite("bigMushy", "bigMushy.png");
  loadSprite("pipeTop", "pipeTop.png");
  loadSprite("pipeBottom", "pipeBottom.png");
  loadSprite("shrubbery", "shrubbery.png");
  loadSprite("hill", "hill.png");
  loadSprite("cloud", "cloud.png");
  loadSprite("castle", "castle.png");
  var LEVELS = [
    [
      "                                                                                                ",
      "                                                                                                ",
      "                                                                                                ",
      "                                                                                                ",
      "                                                                                                ",
      "                                                                                                ",
      "                                                                                                ",
      "      -?-b-                                                                                     ",
      "                                                    ?        ?                                  ",
      "                                                                                                ",
      "                                      _                 ?                                       ",
      "                                 _    |                                                         ",
      "                           _     |    |                _                                        ",
      "       E                   |     |    |   E   E        |                            H           ",
      "================     ===========================================================================",
      "================     ==========================================================================="
    ],
    [
      "                                                                                             ",
      "                                                                                             ",
      "                                                                                             ",
      "                                       ?                                                     ",
      "                                                                                             ",
      "                                   -?-                                                       ",
      "                                                                                             ",
      "      -?-b-                  -?-                                                             ",
      "                                                                                             ",
      "                                                                                             ",
      "                                                                                             ",
      "                                                                                             ",
      "       _                                            _                                        ",
      "       |                                            |          E    E            H           ",
      "================     ========================================================================",
      "================     ========================================================================"
    ]
  ];
  var levelConf = {
    width: 16,
    height: 16,
    pos: vec2(0, 0),
    "=": () => [
      sprite("ground"),
      area(),
      solid(),
      origin("bot"),
      "ground"
    ],
    "-": () => [
      sprite("brick"),
      area(),
      solid(),
      origin("bot"),
      "brick"
    ],
    "H": () => [
      sprite("castle"),
      area({ width: 1, height: 240 }),
      origin("bot"),
      "castle"
    ],
    "?": () => [
      sprite("questionBox"),
      area(),
      solid(),
      origin("bot"),
      "questionBox",
      "coinBox"
    ],
    "b": () => [
      sprite("questionBox"),
      area(),
      solid(),
      origin("bot"),
      "questionBox",
      "mushyBox"
    ],
    "!": () => [
      sprite("emptyBox"),
      area(),
      solid(),
      bump(),
      origin("bot"),
      "emptyBox"
    ],
    "c": () => [
      sprite("coin"),
      area(),
      solid(),
      bump(64, 8),
      cleanup(),
      lifespan(0.4, { fade: 0.01 }),
      origin("bot"),
      "coin"
    ],
    "M": () => [
      sprite("bigMushy"),
      area(),
      solid(),
      patrol(1e4),
      body(),
      cleanup(),
      origin("bot"),
      "bigMushy"
    ],
    "|": () => [
      sprite("pipeBottom"),
      area(),
      solid(),
      origin("bot"),
      "pipe"
    ],
    "_": () => [
      sprite("pipeTop"),
      area(),
      solid(),
      origin("bot"),
      "pipe"
    ],
    "E": () => [
      sprite("enemies", { anim: "Walking" }),
      area({ width: 16, height: 16 }),
      solid(),
      body(),
      patrol(50),
      enemy(),
      origin("bot"),
      "badGuy"
    ],
    "p": () => [
      sprite("mario", { frame: 0 }),
      area({ width: 16, height: 16 }),
      body(),
      mario(),
      bump(150, 20, false),
      origin("bot"),
      "player"
    ]
  };
  scene("start", () => {
    add([
      text("Press enter to start", { size: 24 }),
      pos(vec2(160, 120)),
      origin("center"),
      color(255, 255, 255)
    ]);
    keyRelease("enter", () => {
      go("game");
    });
  });
  go("start");
  scene("game", (levelNumber = 0) => {
    layers([
      "bg",
      "game",
      "ui"
    ], "game");
    const level = addLevel(LEVELS[levelNumber], levelConf);
    add([
      sprite("cloud"),
      pos(20, 50),
      layer("bg")
    ]);
    add([
      sprite("hill"),
      pos(32, 208),
      layer("bg"),
      origin("bot")
    ]);
    add([
      sprite("shrubbery"),
      pos(200, 208),
      layer("bg"),
      origin("bot")
    ]);
    add([
      text("Level " + (levelNumber + 1), { size: 24 }),
      pos(vec2(160, 120)),
      color(255, 255, 255),
      origin("center"),
      layer("ui"),
      lifespan(1, { fade: 0.5 })
    ]);
    const player = level.spawn("p", 1, 10);
    const SPEED = 120;
    keyDown("right", () => {
      if (player.isFrozen)
        return;
      player.flipX(false);
      player.move(SPEED, 0);
    });
    keyDown("left", () => {
      if (player.isFrozen)
        return;
      player.flipX(true);
      if (toScreen(player.pos).x > 20) {
        player.move(-SPEED, 0);
      }
    });
    keyPress("space", () => {
      if (player.isAlive && player.grounded()) {
        player.jump();
        canSquash = true;
      }
    });
    player.action(() => {
      var currCam = camPos();
      if (currCam.x < player.pos.x) {
        camPos(player.pos.x, currCam.y);
      }
      if (player.isAlive && player.grounded()) {
        canSquash = false;
      }
      if (player.pos.y > height() - 16) {
        killed();
      }
    });
    let canSquash = false;
    player.collides("badGuy", (baddy) => {
      if (baddy.isAlive == false)
        return;
      if (player.isAlive == false)
        return;
      if (canSquash) {
        baddy.squash();
      } else {
        if (player.isBig) {
          player.smaller();
        } else {
          killed();
        }
      }
    });
    function killed() {
      if (player.isAlive == false)
        return;
      player.die();
      add([
        text("Game Over :(", { size: 24 }),
        pos(toWorld(vec2(160, 120))),
        color(255, 255, 255),
        origin("center"),
        layer("ui")
      ]);
      wait(2, () => {
        go("start");
      });
    }
    __name(killed, "killed");
    player.on("headbutt", (obj) => {
      if (obj.is("questionBox")) {
        if (obj.is("coinBox")) {
          let coin = level.spawn("c", obj.gridPos.sub(0, 1));
          coin.bump();
        } else if (obj.is("mushyBox")) {
          level.spawn("M", obj.gridPos.sub(0, 1));
        }
        var pos2 = obj.gridPos;
        destroy(obj);
        var box = level.spawn("!", pos2);
        box.bump();
      }
    });
    player.collides("bigMushy", (mushy) => {
      destroy(mushy);
      player.bigger();
    });
    player.collides("castle", (castle, side) => {
      player.freeze();
      add([
        text("Well Done!", { size: 24 }),
        pos(toWorld(vec2(160, 120))),
        color(255, 255, 255),
        origin("center"),
        layer("ui")
      ]);
      wait(1, () => {
        let nextLevel = levelNumber + 1;
        if (nextLevel >= LEVELS.length) {
          go("start");
        } else {
          go("game", nextLevel);
        }
      });
    });
  });
  function patrol(distance = 100, speed = 50, dir = 1) {
    return {
      id: "patrol",
      require: ["pos", "area"],
      startingPos: vec2(0, 0),
      add() {
        this.startingPos = this.pos;
        this.on("collide", (obj, side) => {
          if (side === "left" || side === "right") {
            dir = -dir;
          }
        });
      },
      update() {
        if (Math.abs(this.pos.x - this.startingPos.x) >= distance) {
          dir = -dir;
        }
        this.move(speed * dir, 0);
      }
    };
  }
  __name(patrol, "patrol");
  function enemy() {
    return {
      id: "enemy",
      require: ["pos", "area", "sprite", "patrol"],
      isAlive: true,
      update() {
      },
      squash() {
        console.log("squashing");
        this.isAlive = false;
        this.unuse("patrol");
        this.stop();
        this.frame = 2;
        this.area.width = 16;
        this.area.height = 8;
        this.use(lifespan(0.5, { fade: 0.1 }));
      }
    };
  }
  __name(enemy, "enemy");
  function bump(offset = 8, speed = 2, stopAtOrigin = true) {
    return {
      id: "bump",
      require: ["pos"],
      bumpOffset: offset,
      speed,
      bumped: false,
      origPos: 0,
      direction: -1,
      update() {
        if (this.bumped) {
          this.pos.y = this.pos.y + this.direction * this.speed;
          if (this.pos.y < this.origPos - this.bumpOffset) {
            this.direction = 1;
          }
          if (stopAtOrigin && this.pos.y >= this.origPos) {
            this.bumped = false;
            this.pos.y = this.origPos;
            this.direction = -1;
          }
        }
      },
      bump() {
        this.bumped = true;
        this.origPos = this.pos.y;
      }
    };
  }
  __name(bump, "bump");
  function mario() {
    return {
      id: "mario",
      require: ["body", "area", "sprite", "bump"],
      smallAnimation: "Running",
      bigAnimation: "RunningBig",
      smallStopFrame: 0,
      bigStopFrame: 8,
      smallJumpFrame: 5,
      bigJumpFrame: 13,
      isBig: false,
      isFrozen: false,
      isAlive: true,
      update() {
        if (this.isFrozen) {
          this.standing();
          return;
        }
        if (!this.grounded()) {
          this.jumping();
        } else {
          if (keyIsDown("left") || keyIsDown("right")) {
            this.running();
          } else {
            this.standing();
          }
        }
      },
      bigger() {
        this.isBig = true;
        this.area.width = 24;
        this.area.height = 32;
      },
      smaller() {
        this.isBig = false;
        this.area.width = 16;
        this.area.height = 16;
      },
      standing() {
        this.stop();
        this.frame = this.isBig ? this.bigStopFrame : this.smallStopFrame;
      },
      jumping() {
        this.stop();
        this.frame = this.isBig ? this.bigJumpFrame : this.smallJumpFrame;
      },
      running() {
        const animation = this.isBig ? this.bigAnimation : this.smallAnimation;
        if (this.curAnim() !== animation) {
          this.play(animation);
        }
      },
      freeze() {
        this.isFrozen = true;
      },
      die() {
        this.unuse("body");
        this.bump();
        this.isAlive = false;
        this.freeze();
        this.use(lifespan(1, { fade: 1 }));
      }
    };
  }
  __name(mario, "mario");
})();
//# sourceMappingURL=game.js.map
