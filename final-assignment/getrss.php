<?php
//get the q parameter from URL
//code modified from W3C schools
$q=$_GET["q"];

//find out which feed was selected
if($q=="lib-arch-blog") {
  $xml=("http://libraries.mit.edu/news/category/archives-mit-history/feed/");
} elseif($q=="iasc-blog") {
  $xml=("https://mitiascblog.wordpress.com/feed/");
} elseif ($q=="dig-blog") {
  $xml=("https://libraries.mit.edu/digital-archives/feed/");
}

$xmlDoc = new DOMDocument();
$xmlDoc->load($xml);

//get elements from "<channel>"
$channel=$xmlDoc->getElementsByTagName('channel')->item(0);
$channel_title = $channel->getElementsByTagName('title')
->item(0)->childNodes->item(0)->nodeValue;
$channel_link = $channel->getElementsByTagName('link')
->item(0)->childNodes->item(0)->nodeValue;
$channel_desc = $channel->getElementsByTagName('description')
->item(0)->childNodes->item(0)->nodeValue;

//output elements from "<channel>"
echo("<p><span class='channel-title'><a href='" . $channel_link
  . "'>" . $channel_title . "</a></span>");
echo("<br><span class='channel-description'>");
echo($channel_desc . "</span></p>");

//get and output "<item>" elements
$x=$xmlDoc->getElementsByTagName('item');
for ($i=0; $i<=5; $i++) {
  $item_title=$x->item($i)->getElementsByTagName('title')
  ->item(0)->childNodes->item(0)->nodeValue;
  $item_link=$x->item($i)->getElementsByTagName('link')
  ->item(0)->childNodes->item(0)->nodeValue;
  $item_desc=$x->item($i)->getElementsByTagName('description')
  ->item(0)->childNodes->item(0)->nodeValue;
  echo ("<p><a href='" . $item_link
  . "'>" . $item_title . "</a>");
  echo ("<br>");
  echo ($item_desc . "</p>");
}
?>