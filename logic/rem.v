module rem (
    input [2:0] a,
    input [2:0] b,
    output [2:0] r,
    output dzf
);
assign r[1] = a[1] & ~a[0] & b[1] & b[0];
assign r[0] = a[0] & b[1] & ~(a[1] & b[0]);
assign r[2]=a[2];
assign dzf=~(b[0] | b[1]);
    
endmodule