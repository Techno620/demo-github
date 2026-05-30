import java.util.Scanner;

class Hello{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Welcome to java World ");
        System.out.println("Enter the name of student");
        String name=sc.nextLine();
        System.out.println("Enter roll no of student");
        int roll=sc.nextInt();
        sc.nextLine();
        System.out.println("Enter the section of student");
        String section=sc.nextLine();

        System.out.println("Name of student is "+name+" rollno: "+roll+" section: "+section);

        sc.close();
    }
}