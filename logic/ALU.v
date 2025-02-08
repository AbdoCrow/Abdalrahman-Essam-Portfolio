module ALU (
    input [2:0] A,
    input [2:0] B,
    input [1:0] S,
    output [4:0] R,
    output sf, zf, dzf

); 
    

wire [3:0] sum;
wire [3:0] sub;
wire [4:0] mul;
wire [2:0] re;
wire dz;
wire a,b,c,d,e,f,g; // 7 segment
add_w_sub add(0,A[2:0],B[2:0],sum[3:0]);
add_w_sub subtract(1,A[2:0],B[2:0],sub[3:0]);
mult multiply(A[2:0],B[2:0],mul[4:0]);
rem divide(A[2:0],B[2:0],re[2:0],dz);
mux_4x1 m1 ( sum[0] , sub[0] , mul[0] , re[0] , S[1:0] , R[0] );
mux_4x1 m2 ( sum[1] , sub[1] , mul[1] , re[1] , S[1:0] , R[1] );
mux_4x1 m3 ( sum[2] , sub[2] , mul[2] , 0 , S[1:0] , R[2] );
mux_4x1 m4 ( 0 , 0 , mul[3] , 0 , S[1:0] , R[3] );
mux_4x1 m5 ( sum[3] , sub[3] , mul[4] , re[2] , S[1:0] , R[4] );
assign sf = R[4]; // sign flag
assign zf = ~(R[0] | R[1] | R[2] | R[3]); // zero flag

assign dzf = (S[1] & S[0]) ? dz : 1'b0;
bcd_to_7segment bcd1(R[3],R[2],R[1],R[0],a,b,c,d,e,f,g);
endmodule