Find the bigger value
--

**Files not completed** : code is wrong and algorithm is false (why start a 0 and not a list[0] ? what if numbers are <0 ?

At first, the current maximum is 0.

It compares each item with current maximum:
if it is greater than the maximum known, **it becomes the current maximum**.

At the end of the course, the current maximum is the maximum of the whole picture.


* [PHP](https://www.w3schools.com/Php/php_intro.asp)

```
<?php
function maximum($liste) {
   $actual_max = 0;
   foreach ($liste as $elem)
       if ($elem > $actual_max)
           $actual_max = $elem;
   return $actual_max;
}
?>

```

* [Python](https://docs.python.org/3/tutorial/index.html)

```

```



* [OCaml](https://ocaml.org/learn/description.html)

```
let maximum liste =
  let rec parcours actual_max = function
  | [] -> actual_max
  | elem::reste -> parcours (max actual_max elem) reste
  in parcours 0 liste

```
