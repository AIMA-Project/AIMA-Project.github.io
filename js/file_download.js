function dl_module(uri)
{
    var githubZip = "https://github.com/AIMA-Project/AAMA-";
    switch(uri)
    {
        case "mod1":
            githubZip += "Lab01";
            break;
        case "mod2":
            githubZip += "Lab02";
            break;
        case "mod3":
            githubZip += "Lab03";
            break;
        case "mod4":
            githubZip += "Lab04";
            break;
        case "modxai":
            githubZip += "XAI";
            break;
    }
    githubZip += "/archive/refs/heads/main.zip";
    window.open(githubZip);
}
