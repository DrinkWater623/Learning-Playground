namespace Loops
{
    internal static class StringInput
    {
       public static bool GetInput()
        {

            Console.WriteLine("\nString Input Validation\n");

            bool validInput = false;

            do 
            {
                Console.WriteLine("Enter your role name (Administrator, Manager or User");
                string? userInput = Console.ReadLine();

                if ( userInput == null ) return false;

                userInput=userInput.Trim();
                if ( userInput == "" ) return false;               

                if ( userInput.ToLower() == "administrator" )
                    validInput = true;
                else if ( userInput.ToLower() == "manager" )
                    validInput = true;
                else if ( userInput.ToLower() == "user" )
                    validInput = true;
                
                if (validInput)
                    Console.WriteLine($"Your input value ({userInput}) has been accepted");
                else
                    Console.Write($"The role you entered, \"{userInput}\", is not valid. ");
            } while ( !validInput );


            return true;
        }

    }
}
