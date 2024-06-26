!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.WebflowTools = t())
    : (e.WebflowTools = t());
})(self, function () {
  return (function () {
    "use strict";
    var e = {
        579: function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.selectors = void 0),
            (t.selectors = {
              MASONRY_LAYOUT_SELECTOR: "[r-masonry-layout]",
              COLUMN_MIN_WIDTH_ATTRIBUTE_NAME: "r-masonry-column-min",
              ITEMS_GAP_ATTRIBUTE_NAME: "r-masonry-gap",
            });
        },
      },
      t = {};
    function s(l) {
      var r = t[l];
      if (void 0 !== r) return r.exports;
      var n = (t[l] = { exports: {} });
      return e[l](n, n.exports, s), n.exports;
    }
    var l = {};
    return (
      (function () {
        var e = l;
        Object.defineProperty(e, "__esModule", { value: !0 });
        var t = s(579),
          r = (function () {
            function e(e, t, s, l) {
              (this.galleryElement = e),
                (this.galleryItems = t),
                (this.columnMinWidth = s || 300),
                (this.galleryItemsGap = l || 20),
                (this.galleryClassName = "c-masonry-layout"),
                (this.columnClassName = "c-masonry-column"),
                (this.itemClassName = "c-masonry-item"),
                (this.currentColumnsCount = this.calculateColumns(
                  this.galleryElement,
                  this.columnMinWidth,
                  this.galleryItemsGap
                )),
                (this.galleryStyles = {
                  display: "flex",
                  "flex-wrap": "wrap",
                  "justify-content": "space-bewteen",
                }),
                this.generateMasonryLayout(this.currentColumnsCount),
                this.handleResponsive();
            }
            return (
              (e.prototype.generateMasonryLayout = function (e) {
                var t = [];
                this.galleryElement.classList.add(this.galleryClassName),
                  (this.galleryElement.style.margin =
                    this.currentColumnsCount > 1
                      ? "0 -" + this.galleryItemsGap / 2 + "px"
                      : "0"),
                  Object.assign(this.galleryElement.style, this.galleryStyles);
                for (var s = 1; s <= e; s++) {
                  var l = document.createElement("div");
                  l.classList.add(this.columnClassName, "column-" + s),
                    (l.style.flex = "1"),
                    (l.style.minWidth =
                      this.currentColumnsCount > 1
                        ? this.columnMinWidth + "px"
                        : "0"),
                    this.galleryElement.append(l),
                    t.push(l);
                }
                for (
                  var r = 0;
                  r < Math.ceil(this.galleryItems.length / e);
                  r++
                )
                  for (var n = 0; n < e; n++) {
                    var o = this.galleryItems[r * e + n];
                    if (!o) return;
                    t[n].append(o),
                      o.classList.add(this.itemClassName),
                      (o.style.margin =
                        this.galleryItemsGap +
                        "px " +
                        this.galleryItemsGap / 2 +
                        "px");
                  }
              }),
              (e.prototype.calculateColumns = function (e, t, s) {
                var l = t + s,
                  r = e.offsetWidth + s;
                  var minColumns = 2;
                  return Math.floor(r / l) < minColumns ? minColumns : Math.floor(r / l) || 1;
              }),
              (e.prototype.handleResponsive = function () {
                var e = this;
                window.addEventListener("resize", function () {
                  var t = e.calculateColumns(
                    e.galleryElement,
                    e.columnMinWidth,
                    e.galleryItemsGap
                  );
                  t !== e.currentColumnsCount &&
                    ((e.currentColumnsCount = t),
                    e.galleryElement
                      .querySelectorAll("." + e.columnClassName)
                      .forEach(function (e) {
                        return e.remove();
                      }),
                    e.generateMasonryLayout(t));
                });
              }),
              e
            );
          })();
        document
          .querySelectorAll(t.selectors.MASONRY_LAYOUT_SELECTOR)
          .forEach(function (e) {
            var s = e.querySelectorAll(":scope > *"),
              l = parseInt(
                e.getAttribute(t.selectors.COLUMN_MIN_WIDTH_ATTRIBUTE_NAME) ||
                  "300"
              ),
              n = parseInt(
                e.getAttribute(t.selectors.ITEMS_GAP_ATTRIBUTE_NAME) || "20"
              );
            new r(e, s, l, n);
          });
      })(),
      l
    );
  })();
});
