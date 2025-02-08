module sub_tb;
    reg [2:0] a, b;
    reg k;
    wire [3:0] sum;
          integer i;
  integer j;
    // Instantiate the design under test (DUT)
    add_w_sub dut (
        .k(k),
        .a(a),
        .b(b),
        .sum(sum)
    );

    // File handle for logging results
    integer file;

    initial begin
    a = 3'b000;
    b = 3'b000;
        // Open the file for writing
        file = $fopen("sub.txt", "w");
        if (file == 0) begin
            $display("Error: Failed to open file.");
            $finish;
        end

        // Set k=1 for subtraction
        k = 1;

        // Apply all possible input combinations
        for (i = 0; i < 8; i = i + 1) begin
            for (j = 0; j < 8; j = j + 1) begin
                a = i[2:0]; // Assign 3-bit value of i
                b = j[2:0]; // Assign 3-bit value of j
                #10; // Wait for outputs to stabilize
                $fwrite(file, "k=%b, a=%b, b=%b, sum=%b\n", k, a, b, sum);
            end
        end

        // Close the file
        $fclose(file);

        // Finish the simulation
        $display("Testbench completed. Results saved to sub.txt");
        $finish;
    end
endmodule
