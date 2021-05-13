"use strict";

// Attach source mapping.
var mapperEl = document.createElement("script");
mapperEl.defer = true;
mapperEl.async = false;
mapperEl.src = "stack_trace_mapper.js";
document.head.appendChild(mapperEl);

// Attach require JS.
var requireEl = document.createElement("script");
requireEl.defer = true;
requireEl.async = false;
requireEl.src = "require.js";
// This attribute tells require JS what to load as main (defined below).
requireEl.setAttribute("data-main", "main_module.bootstrap");
document.head.appendChild(requireEl);
