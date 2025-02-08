module mult_tb;
    reg [2:0] a, b;
    wire [4:0] c;
      integer i;
  integer j;
    // Instantiate the design under test (DUT)
    mult dut (
        .a(a),
        .b(b),
        .c(c)
    );

    // File handle for logging results
    integer file;

    initial begin
        // Open the file for writing
        file = $fopen("mult.txt", "w");
        if (file == 0) begin
            $display("Error: Failed to open file.");
            $finish;
        end

        // Apply all possible input combinations
        for (i = 0; i < 8; i = i + 1) begin
            for (j = 0; j < 8; j = j + 1) begin
                 a = i[2:0]; // Assign 3-bit value of i
                b = j[2:0]; // Assign 3-bit value of j
                #10; // Wait for outputs to stabilize
                $fwrite(file, "a=%b, b=%b, c=%b\n", a, b, c);
            end
        end

        // Close the file
        $fclose(file);

        // Finish the simulation
        $display("Testbench completed. Results saved to mult.txt");
        $finish;
    end
endmodule
