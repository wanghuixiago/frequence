"" => ""
"he" => "he 1"，一个单词，驱动出格式化字符串的代码
"he is" => "he 1\r\nis 1"，两个不同单词，驱动出分割单词的代码
"he he is" => "he 2\r\nis 1"，有相同单词，驱动出分组代码
"he is is" => "is 2\r\nhe 1"，驱动出分组后的排序代码
"he  is" => "he 1\r\nis 1"，多个空格，完善分割单词的代码

