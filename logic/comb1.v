module comb1 (
    input in1, in2,
    output res1
);
    wire in1_bar;
    not inv1(in1_bar, in1);
    and and1(res1, in1_bar, in2);
endmodule