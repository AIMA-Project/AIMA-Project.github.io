function dl_module(uri)
{
    var githubZip = "./lab_docs/";
    switch(uri)
    {
        case "mod1":
            githubZip += "lab01";
            break;
        case "mod2":
            githubZip += "lab02";
            break;
        case "mod3":
            githubZip += "lab03";
            break;
        case "mod4":
            githubZip += "lab04";
            break;
        case "mod5":
            githubZip += "lab05";
            break;
        case "mod6":
            githubZip += "lab06";
            break;
        case "mod7":
            githubZip += "lab07";
            break;
    }
    githubZip += ".zip";
    window.open(githubZip);
}
