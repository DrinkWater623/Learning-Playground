using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Math

{
    internal class Calculator
    {
        public int add(int x, int y) { return x + y; }   

        public int sub(int x, int y) {  return x - y; }

        public int mul(int x, int y ) { return x * y; }

        public float div(int x, int y) { return (float) x / (float) y; }

        public float div(float x, float y) { return x / y; }
    }
}
