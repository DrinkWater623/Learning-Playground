namespace Loops;

internal static class SentenceParser
{
    public static void GoCaller()
    {
        string[] myStrings = new string[2] { "I like pizza. I like roast chicken. I like salad", "I like all three of the menu choices" };

        Console.WriteLine("** Recursion **");
        GoRecursive(myStrings);

        Console.WriteLine("** Regular **");
        GoRegular(myStrings);
    }
    static void GoRegular(string[] myStrings)
    {
        foreach (string item in myStrings)
        {
            int dotLocation;
            string line = item.Trim();            

            while (line.Length > 0)
            {
                dotLocation = line.IndexOf(".");

                if (dotLocation == -1)
                {
                    Console.WriteLine(line);
                    line = line.Remove(0);                   
                }
                else if (dotLocation > 0)
                {
                    Console.WriteLine(line.Substring(0, dotLocation));
                }

                line = line.Remove(0,dotLocation+1).TrimStart();             

            }
        }
    }
    
    static void GoRecursive (string[] myStrings)
    {
        foreach (string item in myStrings)
        {
           ParseDots(item.TrimStart());
        }
    }
    static void ParseDots(string line)
    {
        int dotLocation;       
        dotLocation = line.IndexOf(".");        

        if (dotLocation == -1)
        {
            Console.WriteLine(line);
        }
        else if (dotLocation > 0)
        {
            Console.WriteLine(line.Substring(0,dotLocation));
            ParseDots(line.Substring(dotLocation + 1).TrimStart());
        }        
    }
}
