var WinHttpsReq = new ActiveXObject("WinHttps.WinHttpsRequest.5.1");
WinHttpsReq.Open("GET", WScript.Arguments(0), /*async=*/false);
WinHttpsReq.Send();
WScript.Echo(WinHttpsReq.ResponseText);

/* To save a binary file use this code instead of previous line
BinStream = new ActiveXObject("ADODB.Stream");
BinStream.Type = 1;
BinStream.Open();
BinStream.Write(WinHttpsReq.ResponseBody);
BinStream.SaveToFile("out.bin");
*/
