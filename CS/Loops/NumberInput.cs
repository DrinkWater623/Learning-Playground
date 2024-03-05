namespace Loops;


internal static class NumberInput
{ 
    public static bool GetInput()
    {
        bool validInput = false;
        int minInt = 1112;
        int maxInt = 9998;

        Console.WriteLine("\nNumber Input Validation\n");
        Console.WriteLine($"Enter an integer between {minInt} and {maxInt}");

        do 
        {
            string? userInput;
            //int userNumberInput;

            userInput=Console.ReadLine();

            int.TryParse(userInput,out int userNumberInput);
            if (userInput == null || userInput == "") {
                //validInput = true;
                Console.WriteLine("\nNumber Entry Attempt Aborted");
                        return false;
            }
            else if (userNumberInput == 0 && userInput[..0] != "0")
                Console.WriteLine("Sorry, you entered an invalid number, please try again");
            else if (userNumberInput < minInt || userNumberInput > maxInt )
                Console.WriteLine($"You entered {userNumberInput}.  Please enter a number between {minInt} and {maxInt}.");
            else {
                validInput = true;
                Console.WriteLine($"Your input value ({userNumberInput}) has been accepted");
            }
        } while ( !validInput );

        //Console.WriteLine("\nProgram Complete, Press Any Key to Exit.");
        //Console.ReadLine();

        return true;
        
    }
}