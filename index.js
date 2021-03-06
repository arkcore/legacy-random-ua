var _ = require('lodash');

module.exports = function () {
  return _.sample([
    'Mozilla/5.0 (X11; U; Linux x86_64; de; rv:1.8.1.1) Gecko/20061223 BonEcho/2.0.0.',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8) Gecko/20060319 Firefox/2.0a1',
    'Mozilla/5.0 (Windows; U; Windows NT 5.2 x64; en-US; rv:1.9a1) Gecko/20060214 Firefox/1.6a1',
    'Mozilla/5.0 (BeOS; U; BeOS BePC; en-US; rv:1.9a1) Gecko/20051002 Firefox/1.6a1',
    'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.9a1) Gecko/20051102 Firefox/1.6a1',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8) Gecko/20051111 Firefox/1.5',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.5) Gecko/20041103 Firefox/1.0RC2',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.14) Gecko/20080612 Fedora/2.0.0.14-20080612.fc8.acer Firefox/2.0.0.14',
    'Mozilla/5.0 (X11; U; OpenBSD i386; en-US; rv:1.8.1.14) Gecko/20080821 Firefox/2.0.0.14',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.13) Gecko/20080208 Mandriva/2.0.0.13-1mdv2008.1 (2008.1) Firefox/2.0.0.13',
    'Mozilla/5.0 (X11; U; Linux x86_64; sv-SE; rv:1.8.1.12) Gecko/20080207 Ubuntu/7.10 (gutsy) Firefox/2.0.0.12',
    'Mozilla/5.0 (X11; U; SunOS sun4u; en-US; rv:1.8.1.11) Gecko/20080118 Firefox/2.0.0.11',
    'Mozilla/5.0 (X11; U; Linux i686; en-GB; rv:1.8.1.11) Gecko/20071204 Ubuntu/7.10 (gutsy) Firefox/2.0.0.11',
    'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-GB; rv:1.8.1.11) Gecko/20071127 Firefox/2.0.0.11',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.9) Gecko/20071025 Firefox/2.0.0.9',
    'Mozilla/5.0 (X11; U; FreeBSD i686; en-US; rv:1.8.1.9) Gecko/20071025 Firefox/2.0.0.9',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.8) Gecko/20070914  Mandriva/2.0.0.8-1mdv2008.0 (2008.0) Firefox/2.0.0.8',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.7) Gecko/20070918 Firefox/2.0.0.7',
    'Mozilla/5.0 (Windows; U; WinNT3.51; en-US; rv:1.8.1.7) Gecko/20070914 Firefox/2.0.0.7',
    'Mozilla/5.0 (BeOS; U; BeOS BePC; en-US; rv:1.8.1.7)Gecko/20070917 BonEcho/2.0.0.7',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US;rv:1.8.1.7) Gecko/20070914 Firefox/2.0.0.7',
    'Mozilla/5.0 (X11; U; FreeBSD i686; en-US; rv:1.8.1.6)Gecko/20070725 Firefox/2.0.0.6',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.4) Gecko/20070515 Firefox/2.0.0.4',
    'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.8.1.4) Gecko/20061201 Firefox/2.0.0.4 (Ubuntu-feisty)',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.3) Gecko/20070309 Firefox/2.0.0.3',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.2) Gecko/20070220 Firefox/2.0.0.2',
    'Mozilla/5.0 (X11; U; SunOS sun4u; en-US; rv:1.8.1.1) Gecko/20061228 Firefox/2.0.0.1',
    'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-GB; rv:1.8.1) Gecko/20061010 Firefox/2.0',
    'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-GB; rv:1.8.1) Gecko/20060918 Firefox/2.0',
    'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-GB; rv:1.8.1b2) Gecko/20060821 Firefox/2.0b2',
    'Mozilla/5.0 (X11; U; Darwin Power Macintosh; en-US; rv:1.8.0.12) Gecko/20070803 Firefox/1.5.0.12 Fink Community Edition',
    'Mozilla/5.0 (OS/2; U; Warp 4.5; en-US; rv:1.8.0.7) Gecko/20060915 Firefox/1.5.0.7',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.0.7) Gecko/20060909 Firefox/1.5.0.7',
    'Mozilla/5.0 (Windows; U; Windows NT 6.0; pt-BR; rv:1.8.0.7) Gecko/20060909 Firefox/1.5.0.7',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.5) Gecko/20060719 Firefox/1.5.0.5',
    'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.8.0.3) Gecko/20060426 Firefox/1.5.0.3',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.6) Gecko/20060728 Firefox/1.5.0.6',
    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en-US; rv:1.8.0.4) Gecko/20060508 Firefox/1.5.0.4',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9a1) Gecko/20060612 Minefield/3.0a1',
    'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.8.0.4) Gecko/20060508 Firefox/1.5.0.4',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.4) Gecko/20060602 Firefox/1.5.0.4',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.4) Gecko/20060602 Firefox/1.5.0.4',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.3) Gecko/20061024 Oracle/1.5.0.3-0.3.EL4 Firefox/1.5.0.3 pango-text',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.3) Gecko/20060425 SUSE/1.5.0.3-7 Firefox/1.5.0.31',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.0.2) Gecko/20060308 Firefox/1.5.0.2',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.0.1) Gecko/20060111 Firefox/1.5.0.1',
    'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.8) Gecko/20051111 Firefox/1.5',
    'Mozilla/5.0 (X11; U; SunOS i86pc; en-US; rv:1.8) Gecko/20051130 Firefox/1.5',
    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en-US; rv:1.8) Gecko/20051111 Firefox/1.5',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; pt-BR; rv:1.8) Gecko/20051111 Firefox/1.5',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.13) Gecko/20060410 Firefox/1.0.8',
    'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US; rv:1.7.12) Gecko/20050915 Firefox/1.0.7 (ax)',
    'Mozilla/5.0 (X11; U; Linux sparc64; en-US; rv:1.7.12) Gecko/20051105 Firefox/1.0.7',
    'Mozilla/5.0 (X11; U; FreeBSD i386; en-US; rv:1.7.12) Gecko/20051105 Firefox/1.0.7',
    'Mozilla/5.0 (OS/2; U; Warp 4.5; en-US; rv:1.7.12) Gecko/20050922 Firefox/1.0.7',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.12) Gecko/20050922 Firefox/1.0.7 (Ubuntu package 1.0.7)',
    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en-US; rv:1.7.12) Gecko/20050915 Firefox/1.0.7',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.12) Gecko/20050915 Firefox/1.0.7',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; pt-BR; rv:1.7.10) Gecko/20050717 Firefox/1.0.6',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.7.10) Gecko/20050925 Firefox/1.0.4 (Debian package 1.0.4-2sarge5)',
    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en-US; rv:1.7.8) Gecko/20050511 Firefox/1.0.4',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.8) Gecko/20050511 Firefox/1.0.4 (ax)',
    'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-GB; rv:1.7.8) Gecko/20050418 Firefox/1.0.4',
    'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.7.6) Gecko/20050317 Firefox/1.0.2',
    'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.7.6) Gecko/20050224 Firefox/1.0.2',
    'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.8b2) Gecko/20050224 Firefox/1.0+',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8b3) Gecko/20050712 Firefox/1.0+',
    'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-GB; rv:1.7.6) Gecko/20050222 Firefox/1.0.1',
    'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.7.5) Gecko/20050207 Firefox/1.0.1',
    'Mozilla/5.0 (SkyOS; U; Intel x86; en-US; rv:1.7.5) Gecko/20061024 Firefox/1.0',
    'Mozilla/5.0 (X11; U; SunOS sun4u; en-US; rv:1.7.5) Gecko/20041109 Firefox/1.0',
    'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US; rv:1.7.5) Gecko/20041107 Firefox/1.0',
    'Mozilla/5.0 (Windows; U; Win95; en-US; rv:1.7.5) Gecko/20041107 Firefox/1.0',
    'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US; rv:1.7.5) Gecko/20041107 Firefox/1.0',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.5) Gecko/20041107 Firefox/1.0',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7) Gecko/20041122 Firefox/0.5.6+',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7) Gecko/20040815 Firefox/0.8 (MOOX M3)',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; rv:1.7.3) Gecko/20040913 Waterunicorn/0.10 StumbleUpon/1.998',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.3) Gecko/20041002 Firefox/0.10.1',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.3) Gecko/20041002 Firefox/0.10',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; rv:1.7.3) Gecko/20040913 Spacebug/0.10 (aka Firefox/0.10)',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; rv:1.7.3) Gecko/20040913 Firefox/0.10',
    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en-US; rv:1.6) Gecko/20040206 Firefox/0.8',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7) Gecko/20040803 Firefox/0.9.3',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7) Gecko/20040707 Firefox/0.9.2 StumbleUpon/1.998',
    'Mozilla/5.0 (Windows; U; Windows NT 5.0; de-DE; rv:1.7) Gecko/20040707 Firefox/0.9.2',
    'Mozilla/5.0 (X11; U; FreeBSD i386; en-US; rv:1.7) Gecko/20040630 Firefox/0.9.1',
    'Mozilla/5.0 (X11; U; NetBSD i386; en-GB; rv:1.7) Gecko/20040708 Firefox/0.9.1',
    'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.7) Gecko/20040626 Firefox/0.9.1',
    'Mozilla/5.0 (X11; U; FreeBSD i386; en-US; rv:1.7) Gecko/20040619 Firefox/0.9',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7) Gecko/20040614 Firefox/0.9',
    'Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.8a) Gecko/20040416 Firefox/0.8.0+',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.6) Gecko/20040206 Firefox/0.8 Mnenhy/0.6.0.103',
    'Mozilla/5.0 (X11; U; Linux i686; de-DE; rv:1.6) Gecko/20040207 Firefox/0.8',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.5) Gecko/20031007 Firebird/0.7',
    'Mozilla/5.0 (X11; U; FreeBSD i386; en-US; rv:1.5) Gecko/20031023 Firebird/0.7',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.5a) Gecko/20031002 Mozilla Firebird/0.6.1',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.4b) Gecko/20030516 Mozilla Firebird/0.6',
    'Mozilla/5.0 (X11; U; SunOS sun4m; en-US; rv:1.4b) Gecko/20030517 Mozilla Firebird/0.6',
    'Mozilla/5.0 (X11; U; SunOS sun4m; en-US; rv:1.4b) Gecko/20030517 Mozilla Firebird/0.6',
    'Mozilla/5.0 (Windows; U; WinNT4.0; en-US; rv:1.3a) Gecko/20021207 Phoenix/0.5',
    'Mozilla/5.0 (Windows; U; WinNT4.0; en-US; rv:1.2b) Gecko/20021001 Phoenix/0.2',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.2b) Gecko/20020923 Phoenix/0.1',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Rogers Hi�Speed Internet; (R1 1.3))',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; Business Everywhere 7.1.2; GTB6; .NET CLR 1.0.3705; .NET CLR 1.1.4322; Media Center PC 4.0)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; NeosBrowser; .NET CLR 1.1.4322; .NET CLR 2.0.50727)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; TheFreeDictionary.com; .NET CLR 1.1.4322; .NET CLR 1.0.3705; .NET CLR 2.0.50727)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; WOW64; SV1; .NET CLR 2.0.50727)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; Win64; x64; SV1; .NET CLR 2.0.50727)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322; XMPP Tiscali Communicator v.10.0.2; .NET CLR 2.0.50727)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; T312461)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1) Netscape/8.0.4',
    'Mozilla/4.0 (compatible; MSIE 6.0; America Online Browser 1.1; rev1.2; Windows NT 5.1; SV1; .NET CLR 1.1.4322)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Win 9x 4.90; Creative)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; FunWebProducts; .NET CLR 1.1.4322; PeoplePal 6.2)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows XP)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; APC; .NET CLR 1.0.3705; .NET CLR 1.1.4322; .NET CLR 2.0.50215; InfoPath.1)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Deepnet Explorer 1.5.0; .NET CLR 1.0.3705)',
    'Mozilla/4.0 (compatible- MSIE 6.0- Windows NT 5.1- SV1- .NET CLR 1.1.4322',
    'Mozilla/4.0 (compatible; MSIE 6.0; WINDOWS; .NET CLR 1.1.4322)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; Media Center PC 3.0; .NET CLR 1.0.3705; MediaCenter 5.1.2600.2180)',
    'Mozilla/4.0 (compatible; MSIE 5.01; Windows 95; MSIECrawler)',
    'Mozilla/4.0 (compatible; MSIE 6.0; AOL 9.0; Windows NT 5.1)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322; Alexa Toolbar; (R1 1.5))',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Maxthon; .NET CLR 1.1.4322)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322) ,gzip(gfe) (via translate.google.com)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; Win64; AMD64)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; Win64; AMD64)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; Crazy Browser 2.0.0 Beta 1; .NET CLR 1.0.3705; .NET CLR 1.1.4322)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Update a; AOL 6.0; Windows 98)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; YPC 3.0.2; .NET CLR 1.1.4322; yplus 4.4.02b)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.0.3705; .NET CLR 1.1.4322; .NET CLR 2.0.40607)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322) Babya Discoverer 8.0:',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Crazy Browser 1.0.5)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT) ::ELNSB50::000061100320025802a00111000000000507000900000000',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; MyIE2; Deepnet Explorer)',
    'Mozilla/4.0 (compatible; MSIE 5.23; Macintosh; PPC) Escape 5.1.3',
    'Mozilla/4.0 (compatible; MSIE 5.23; Mac_PowerPC)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; .NET CLR 1.0.3705; .NET CLR 1.1.4322)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; FREE; .NET CLR 1.1.4322)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; Q312461)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.0.3705)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Win 9x 4.90)',
    'Mozilla/4.0 (compatible; MSIE 5.5; Windows 98)',
    'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; .NET CLR 1.1.4322)',
    'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0; T312461)',
    'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0)',
    'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 4.0; .NET CLR 1.0.2914)',
    'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0)',
    'Mozilla/4.0 (compatible; MSIE 5.5; Windows 95)',
    'Mozilla/4.0 (compatible; MSIE 5.13; Mac_PowerPC)',
    'Mozilla/4.0 (compatible; MSIE 5.5; Windows 95; BCD2000)',
    'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.2)',
    'Mozilla/4.0 (compatible; MSIE 5.0; SunOS 5.10 sun4u; X11)',
    'Mozilla/4.0 (compatible; MSIE 5.22; Mac_PowerPC)',
    'Mozilla/4.0 (compatible; MSIE 5.0; Windows 3.1)',
    'Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)',
    'Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.2)',
    'Mozilla/4.0 (compatible; MSIE 5.0; Mac_PowerPC; e504460WanadooNL)',
    'Mozilla/4.0 (compatible; MSIE 5.0; Windows 3.1)',
    'Mozilla/4.0 (compatible; MSIE 4.01; Windows NT 5.0)',
    'Mozilla/4.0 (compatible; MSIE 4.01; Digital AlphaServer 1000A 4/233; Windows NT; Powered By 64-Bit Alpha Processor)',
    'Mozilla/2.0 (compatible; MSIE 3.02; Windows CE; 240x320)',
    'Mozilla/2.0 (compatible; MSIE 3.0; Windows 3.1)',
    'Mozilla/1.22 (compatible; MSIE 2.0; Windows 95)',
    'Mozilla/1.22 (compatible; MSIE 2.0d; Windows NT)',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)',
    'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Chrome/1.0.154.53 Safari/525.19',
    'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7; en-US) AppleWebKit/531.0 (KHTML, like Gecko) Chrome/3.0.183 Safari/531.0',
    'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Chrome/1.0.154.53 Safari/525.19',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Chrome/1.0.154.36 Safari/525.19',
    'Mozilla/5.0 (Linux; U; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.27 Safari/525.13',
    'Opera/9.62 (Windows NT 5.1; U; en) Presto/2.1.1',
    'Opera/9.60 (X11; Linux i686; U; en) Presto/2.1.1',
    'Opera/9.52 (Windows NT 5.1; U; en)',
    'Opera/9.25 (Windows NT 6.0; U; en)',
    'Opera/9.20 (Macintosh; Intel Mac OS X; U; en)',
    'Opera/9.02 (Windows NT 5.0; U; en)',
    'Opera/9.00 (Windows NT 4.0; U; en)',
    'Opera/9.00 (X11; Linux i686; U; en)',
    'Opera/9.00 (Windows NT 5.1; U; en)',
    'Opera/9.0 (Windows NT 5.1; U; en) Opera/9.0 (Macintosh; PPC Mac OS X; U; en) Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en) Opera 9.0',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; PPC; 480x640) Opera 8.60 [en]',
    'Opera/8.5 (Macintosh; PPC Mac OS X; U; en)',
    'Mozilla/5.0 (Macintosh; PPC Mac OS X; U; en) Opera 8.5',
    'Mozilla/4.0 (compatible; MSIE 6.0; Mac_PowerPC Mac OS X; en) Opera 8.5',
    'Opera/8.0 (Macintosh; PPC Mac OS X; U; en)',
    'Mozilla/5.0 (Macintosh; PPC Mac OS X; U; en) Opera 8.0',
    'Mozilla/4.0 (compatible; MSIE 6.0; Mac_PowerPC Mac OS X; en) Opera 8.0',
    'Opera/8.01 (Windows NT 5.1)',
    'Mozilla/5.0 (Windows NT 5.1; U; en) Opera 8.01',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)',
    'Mozilla/5.0 (Windows NT 5.1; U; en) Opera 8.00',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en) Opera 8.00',
    'Opera/8.00 (Windows NT 5.1; U; en)',
    'Mozilla/5.0 (X11; Linux i386; U) Opera 7.60 [en-GB]',
    'Opera/7.60 (Windows NT 5.2; U) [en] (IBM EVV/3.0/EAK01AG9/LE)',
    'Opera/7.54 (Windows NT 5.1; U) [pl]',
    'Opera/7.50 (X11; Linux i686; U) [en]',
    'Mozilla/4.0 (compatible; MSIE 6.0; X11; Linux i686) Opera 7.20 [en]',
    'Opera/7.11 (Windows NT 5.1; U) [en]',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows ME) Opera 7.11 [en]',
    'Mozilla/4.0 (compatible; MSIE 6.0; MSIE 5.5; Windows NT 5.0) Opera 7.02 Bork-edition [en]',
    'Mozilla/4.0 (compatible; MSIE 6.0; MSIE 5.5; Windows NT 4.0) Opera 7.0 [en]',
    'Mozilla/4.0 (compatible; MSIE 5.0; Windows 2000) Opera 6.0 [en]',
    'Mozilla/4.0 (compatible; MSIE 5.0; Windows 95) Opera 6.01 [en]',
    'Mozilla/4.0 (compatible; MSIE 5.0; Mac_PowerPC) Opera 5.0 [en]',
    'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5H11a Safari/525.20',
    'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7; en-us) AppleWebKit/525.28.3 (KHTML, like Gecko) Version/3.2.3 Safari/525.28.3',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Version/3.1.2 Safari/525.21',
    'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5F136 Safari/525.20',
    'Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A347 Safari/525.20',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Version/3.1.2 Safari/525.21',
    'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_0 like Mac OS X; de-de) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A347 Safari/525.20',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Version/3.1.2 Safari/525.21',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.18 (KHTML, like Gecko) Version/3.1.1 Safari/525.17',
    'Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A101a Safari/419.3',
    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_2; en-us) AppleWebKit/525.13 (KHTML, like Gecko) Version/3.1 Safari/525.13',
    'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_2; en-us) AppleWebKit/525.13 (KHTML, like Gecko) Version/3.1 Safari/525.13',
    'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/4A93 Safari/419.3',
    'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-gb) AppleWebKit/523.10.6 (KHTML, like Gecko) Version/3.0.4 Safari/523.10.6',
    'Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A100a Safari/419.3',
    'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1C28 Safari/419.3',
    'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en) AppleWebKit/522.11.1 (KHTML, like Gecko) Version/3.0.3 Safari/522.12.1',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; bg) AppleWebKit/522.13.1 (KHTML, like Gecko) Version/3.0.2 Safari/522.13.1',
    'Mozilla/4.0 (compatible; Mozilla/4.0; Mozilla/5.0; Mozilla/6.0; Safari/431.7; Macintosh; U; PPC Mac OS X 10.6 Leopard; AppleWebKit/421.9 (KHTML, like Gecko) )',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; ru) AppleWebKit/522.11.3 (KHTML, like Gecko) Version/3.0 Safari/522.11.3',
    'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en) AppleWebKit/419.3 (KHTML, like Gecko) Safari/419.3',
    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/418.8 (KHTML, like Gecko) Safari/419.3',
    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/417.9 (KHTML, like Gecko) Safari/417.8',
    'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en) AppleWebKit/417.3 (KHTML, like Gecko) Safari/417.2',
    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/412 (KHTML, like Gecko) Safari/412',
    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/312.9 (KHTML, like Gecko) Safari/312.6',
    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; fr-fr) AppleWebKit/312.5.1 (KHTML, like Gecko) Safari/312.3.1',
    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; fr-fr) AppleWebKit/312.5 (KHTML, like Gecko) Safari/312.3',
    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/124 (KHTML, like Gecko) Safari/125.1',
    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/106.2 (KHTML, like Gecko) Safari/100.1',
    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; es) AppleWebKit/85 (KHTML, like Gecko) Safari/85',
    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-us) AppleWebKit/74 (KHTML, like Gecko) Safari/74',
    'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/51 (like Gecko) Safari/51'
  ]);
};