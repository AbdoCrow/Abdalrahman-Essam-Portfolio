module rem_tb;
    reg [2:0] a, b;
    wire [2:0] r;
    wire dzf;
      integer i;
  integer j;

    // Instantiate the design under test (DUT)
    rem dut (
        .a(a),
        .b(b),
        .r(r),
        .dzf(dzf)
    );

    // File handle for saving results
    integer file;

    initial begin
          a = 3'b000;
    b = 3'b000;
      
        file = $fopen("rem.txt", "w"); // Open the file for writing
        if (file == 0) begin
            $display("Error: Failed to open file.");
            $finish;
        end

        // Apply all possible input combinations
        for (i = 0; i < 8; i = i + 1) begin
            for (j = 0; j < 8; j = j + 1) begin
                a = i[2:0]; // Assign 3-bit value of i
                b = j[2:0]; // Assign 3-bit value of j
                #10; // Wait 10 time units
                $fwrite(file, "a=%b, b=%b, r=%b, dzf=%b\n", a, b, r, dzf);
            end
        end
        $fclose(file); // close file

        // end simulation
        $display("Testbench completed. Results saved to rem.txt");
        $finish;
    end
endmodule
