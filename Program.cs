using system;

class Program
{
static void Main(string[]args)
{
    // El codigo utiliza un bucle while para mostrar el menú y leer la entrada de usuario
    bool showMenu=true;
    while (showMenu) 
    {
    showMenu= MainMenu();   
    }
}
}
static bool MainMenu()
{
    //al selecciona una opcion borre lo que tenemos encima 
    Console.Clear();
    Console.WriteLine("Selecciona la opcion requerida:");
    Console.WriteLine("1)Ver catalogo de libros");
    Console.WriteLine("2)Agregar un libro");
    Console.WriteLine("3)Borrar un libro");
    Console.WriteLine("4)Filtrar por caracteristicas");
    Console.WriteLine("5)salir");
    Console.WriteLine("\r\nElija una opción:");
    //Se ejecuta la acción correspondiente a la opción seleccionada.
    //utiliza un switch para determinar qué accion realizar en función a la opcion seleccionada.
    swit(Console.ReadLine())
    {
        case "1":
             Console.WriteLine("Ha seleccionado la opcion 1. Mostrando catalogos de libros")
             Console.ReadLine();
             return true;
        case "2":
             Console.WriteLine("Ha seleccionado la opcion 2. Que libro quiere agregar? (por favor llenar todas las casillas)");
             Console.ReadLine();
             return true;
        case "3":
             Console.WriteLine("Ha seleccionado la opcion 3. Que libro quiere borrar? (solo escribir el titulo)");
             Console.ReadLine();
             return true;
        case "4":
             Console.WriteLine("Ha seleccionado la opcion 4. Que caracteristicas quiere consultar? (titulo,editorial,idioma,genero,etc)");
             Console.ReadLine();
             return true;
        case "5":
             return false;
        default:    
             return true;   
    }        
}