(function() {var implementors = {};
implementors["byteorder"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"byteorder/enum.BigEndian.html\" title=\"enum byteorder::BigEndian\">BigEndian</a>","synthetic":false,"types":["byteorder::BigEndian"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"byteorder/enum.LittleEndian.html\" title=\"enum byteorder::LittleEndian\">LittleEndian</a>","synthetic":false,"types":["byteorder::LittleEndian"]}];
implementors["embedded_hal"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"embedded_hal/can/enum.ErrorKind.html\" title=\"enum embedded_hal::can::ErrorKind\">ErrorKind</a>","synthetic":false,"types":["embedded_hal::can::ErrorKind"]}];
implementors["heapless"] = [{"text":"impl&lt;const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;","synthetic":false,"types":["heapless::string::String"]},{"text":"impl&lt;T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.59.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"heapless/struct.Vec.html\" title=\"struct heapless::Vec\">Vec</a>&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,&nbsp;</span>","synthetic":false,"types":["heapless::vec::Vec"]},{"text":"impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"heapless/pool/singleton/arc/struct.Arc.html\" title=\"struct heapless::pool::singleton::arc::Arc\">Arc</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"heapless/pool/singleton/arc/trait.Pool.html\" title=\"trait heapless::pool::singleton::arc::Pool\">Pool</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P::<a class=\"associatedtype\" href=\"heapless/pool/singleton/arc/trait.Pool.html#associatedtype.Data\" title=\"type heapless::pool::singleton::arc::Pool::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,&nbsp;</span>","synthetic":false,"types":["heapless::pool::singleton::arc::Arc"]},{"text":"impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"heapless/pool/singleton/struct.Box.html\" title=\"struct heapless::pool::singleton::Box\">Box</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"heapless/pool/singleton/trait.Pool.html\" title=\"trait heapless::pool::singleton::Pool\">Pool</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P::<a class=\"associatedtype\" href=\"heapless/pool/singleton/trait.Pool.html#associatedtype.Data\" title=\"type heapless::pool::singleton::Pool::Data\">Data</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,&nbsp;</span>","synthetic":false,"types":["heapless::pool::singleton::Box"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"heapless/pool/struct.Box.html\" title=\"struct heapless::pool::Box\">Box</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,&nbsp;</span>","synthetic":false,"types":["heapless::pool::Box"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"heapless/sorted_linked_list/struct.LinkedIndexU8.html\" title=\"struct heapless::sorted_linked_list::LinkedIndexU8\">LinkedIndexU8</a>","synthetic":false,"types":["heapless::sorted_linked_list::LinkedIndexU8"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"heapless/sorted_linked_list/struct.LinkedIndexU16.html\" title=\"struct heapless::sorted_linked_list::LinkedIndexU16\">LinkedIndexU16</a>","synthetic":false,"types":["heapless::sorted_linked_list::LinkedIndexU16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"heapless/sorted_linked_list/struct.LinkedIndexUsize.html\" title=\"struct heapless::sorted_linked_list::LinkedIndexUsize\">LinkedIndexUsize</a>","synthetic":false,"types":["heapless::sorted_linked_list::LinkedIndexUsize"]}];
implementors["proc_macro2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"proc_macro2/struct.Ident.html\" title=\"struct proc_macro2::Ident\">Ident</a>","synthetic":false,"types":["proc_macro2::Ident"]}];
implementors["syn"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"syn/struct.Lifetime.html\" title=\"struct syn::Lifetime\">Lifetime</a>","synthetic":false,"types":["syn::lifetime::Lifetime"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()